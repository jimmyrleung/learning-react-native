import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

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

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    };

    renderError() {
        return this.props.error ?
            (<View style={{ backgroundColor: 'white' }}>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
            </View>) : null;
    }

    renderButton() {
        return this.props.loading ?
            (<Spinner size="large" />) :
            (<Button onPress={this.onButtonPress.bind(this)}>Login</Button>);
    }

    render() {
        const { email, password } = this.props;

        return (
            <Card>
                <CardSection>
                    <Input
                        autoCapitalize='none'
                        label='Email'
                        placeholder='test@mail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        autoCapitalize='none'
                        secureTextEntry
                        label='Password'
                        placeholder='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    };
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);