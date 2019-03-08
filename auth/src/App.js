import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';


class App extends Component {

  state = { loggedIn: null };

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

    // Whenever the user signs in or signs out, this function will be called
    // It also keeps our firebase session
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: !!user }, () => {
        console.log("Is logged in?", this.state.loggedIn);
      });
    })
  }

  renderContent() {
    return this.state.loggedIn ?
      (<Button onPress={() => firebase.auth().signOut()}>Log Out</Button>) :
      (<LoginForm />);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header text='Authentication' />
        {this.renderContent()}
      </View >
    );
  }
}

export default App;