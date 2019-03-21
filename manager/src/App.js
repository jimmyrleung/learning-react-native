import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import appConfig from '../app.json';


class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: appConfig.apiKey,
            authDomain: appConfig.authDomain,
            databaseURL: appConfig.databaseURL,
            projectId: appConfig.projectId,
            storageBucket: appConfig.storageBucket,
            messagingSenderId: appConfig.messagingSenderId
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>Hello Manager!</Text>
                </View>
            </Provider>
        );
    };
}

export default App;