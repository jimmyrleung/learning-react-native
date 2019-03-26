import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// It's a middleware that gives us access to the dispatch function
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import firebase from 'firebase';

import appConfig from '../app.json';
import LoginForm from './components/LoginForm';


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
        // * Param 1: Our reducers combined
        // * Param 2: Any initial state that we might want to pass to our application
        // * Param 3: store enhancers (functions that add features to our redux store)
        const store =
            createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    };
}

export default App;