import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

    state = { email: '', password: '', error: '', loading: false };

    async onButtonPress() {
        this.setState({ error: '', loading: true });
        await this.signIn();
    };

    async signIn() {
        const { email, password } = this.state;

        try {
            await firebase
                .auth()
                .signInWithEmailAndPassword(email.trim(), password.trim());
        }
        catch (ex) {
            await this.createAccount();
        }
        finally {
            this.setState({ loading: false });
        }
    };

    async createAccount() {
        const { email, password } = this.state;

        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email.trim(), password.trim());
        }
        catch (ex) {
            console.log("Error: ", ex);
            this.setState({ error: 'Authentication failed.' });
        }
        finally {
            this.setState({ loading: false });
        }
    };

    renderButton() {
        return this.state.loading ?
            (<Spinner size='small' />) :
            (
                <Button onPress={this.onButtonPress.bind(this)}>
                    Login
                </Button>
            );
    };

    renderErrorMessage() {
        return this.state.error ?
            (<Text style={styles.errorTextStyle}>{this.state.error}</Text>) : null
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
                {this.renderErrorMessage()}
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
};

export default LoginForm;