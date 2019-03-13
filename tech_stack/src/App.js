import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

/* Provider */
// The provider is the component that 'translates' the data within the store 
// to be used by the react application (communication)

/* Store */
// The store is the component that holds our application data (states)

const App = () => (
    <Provider store={createStore(reducers)}>
        <View />
    </Provider>
);

export default App;
