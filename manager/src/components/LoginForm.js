import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {

    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='test@mail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='Password'
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    };
}

export default connect(null, { emailChanged, passwordChanged })(LoginForm);