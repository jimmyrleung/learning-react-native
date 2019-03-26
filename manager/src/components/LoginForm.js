import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    componentWillUnmount() {
        this.props.emailChanged('');
        this.props.passwordChanged('');
    };

    render() {
        const { email, password } = this.props;
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='test@mail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={password}
                    />
                </CardSection>
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    };
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};
// This way of 'mapDispatchToProps' only works with synchronous actions
export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);