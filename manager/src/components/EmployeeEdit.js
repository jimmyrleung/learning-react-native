import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { employeeFormUpdate, employeeUpdate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';


class EmployeeEdit extends Component {

    componentWillMount() {
        // for each key from our object
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeFormUpdate({ prop, value });
        })
    }

    onButtonPress() {
        const { name, phone, shift, employee } = this.props;
        this.props.employeeUpdate({ name, phone, shift, uid: employee.uid });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Delete</Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    employeeFormUpdate, employeeUpdate
})(EmployeeEdit);