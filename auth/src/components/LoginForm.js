import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='E-mail'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={this.state.email}
                        placeholder='test@test.com'
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Password'
                        autoCorrect={false}
                        autoCapitalize='none'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;