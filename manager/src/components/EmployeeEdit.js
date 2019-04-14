import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import _ from 'lodash';
import { employeeFormUpdate, employeeUpdate, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';


class EmployeeEdit extends Component {

    state = { fireDialogVisible: false };

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

    onTextPress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}.`);
    }

    onFirePress() {
        this.setState({ fireDialogVisible: true });
    }

    onAccept() {
        this.props.employeeDelete({ uid: this.props.employee.uid });
    }

    onDecline() {
        this.setState({ fireDialogVisible: false });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onFirePress.bind(this)}>Fire Employee</Button>
                </CardSection>
                <Confirm
                    visible={this.state.fireDialogVisible}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this employee?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    employeeFormUpdate, employeeUpdate, employeeDelete
})(EmployeeEdit);