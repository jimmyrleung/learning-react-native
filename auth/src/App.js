import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';


class App extends Component {

  componentWillMount() {
    // We initialize the firebase before our component mount
    firebase.initializeApp({
      apiKey: 'AIzaSyBg9nKczULLNtMDx6lmr8O8SGSW7ISPfyI',
      authDomain: 'learning-rn-auth.firebaseapp.com',
      databaseURL: 'https://learning-rn-auth.firebaseio.com',
      projectId: 'learning-rn-auth',
      storageBucket: 'learning-rn-auth.appspot.com',
      messagingSenderId: '69981354833'
    });
  }

  render() {
    return (
      <View>
        <Header text='Authentication' />
        <LoginForm />
      </View >
    );
  }
}

export default App;