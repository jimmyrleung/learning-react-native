import React, { Component } from 'react';
import { Picker, Text } from 'react-native'
import { connect } from 'react-redux';

import { employeeFormUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeForm extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift });
    }

    render() {
        const { name, phone, shift, employeeFormUpdate } = this.props;

        return (
            <Card>
                <CardSection>
                    <Input
                        autoCapitalize='none'
                        label='Name'
                        placeholder='Jane'
                        onChangeText={value => employeeFormUpdate({ prop: 'name', value })}
                        value={name}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        autoCapitalize='none'
                        label='Phone'
                        placeholder='555-555-555'
                        onChangeText={value => employeeFormUpdate({ prop: 'phone', value })}
                        value={phone}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={shift}
                        onValueChange={value => employeeFormUpdate({ prop: 'shift', value })}
                        style={{ flex: 0.66, paddingBottom: 60, alignContent: 'flex-end' }}
                    >
                        <Picker.Item label='Monday' value='Monday' />
                        <Picker.Item label='Tuesday' value='Tuesday' />
                        <Picker.Item label='Wednesday' value='Wednesday' />
                        <Picker.Item label='Thursday' value='Thursday' />
                        <Picker.Item label='Friday' value='Friday' />
                        <Picker.Item label='Saturday' value='Saturday' />
                        <Picker.Item label='Sunday' value='Sunday' />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    employeeFormUpdate,
    employeeCreate
})(EmployeeForm);