import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchEmployees } from '../actions'
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.fetchEmployees();
        this.createDataSource(this.props);
    };

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.createDataSource(nextProps);
    };

    createDataSource({ employeesList }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employeesList);
    }

    renderRow(employee) {
        return <EmployeeListItem employee={employee} />
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    };
}

const mapStateToProps = state => {
    //lodash map iterates through each property
    console.log(state);
    const employees = _.map(state.employeesList, (val, uid) => {
        // return the whole object + uid
        return { ...val, uid };
    });

    console.log(employees);
    return { employeesList: employees };
}

export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);