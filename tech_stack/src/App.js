import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

/* Provider */
// The provider is the component that 'translates' the data within the store 
// to be used by the react application (communication)

/* Store */
// The store is the component that holds our application data (states)

const App = () => (
    <Provider store={createStore(reducers)}>
        {/* Flex 1: Fill the whole space available */}
        <View style={{ flex: 1 }}>
            <Header text="Tech Stack" />
            <LibraryList />
        </View>
    </Provider>
);

export default App;
