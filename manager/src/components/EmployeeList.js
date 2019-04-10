import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchEmployees } from '../actions'
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
    state = { employeesList: [] };

    componentWillMount() {
        this.props.fetchEmployees();
        this.setEmployeesList(this.props);
    };

    componentWillReceiveProps(nextProps) {
        this.setEmployeesList(nextProps);
    };

    setEmployeesList({ employeesList }) {
        this.setState({ employeesList });
    }

    render() {
        return (
            <ScrollView>
                {
                    this.state.employeesList.map((e) =>
                        <EmployeeListItem key={e.uid} employee={e} />
                    )
                }
            </ScrollView>
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