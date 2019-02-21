import React from 'react';
import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    // This flex:1 says: please expand this component to fill the entire
    // content area of the device (if you're using a scroll component,
    // you'll probably have some struggle trying to scroll through all 
    // your content without this property)
    <View style={{ flex: 1 }}>
        <Header text="Albums" />
        <AlbumList />
    </View>
);

// At least one component must be registered
// Bootstrap our application called appName registering our App Component
// The App Component will be the first rendered component
AppRegistry.registerComponent(appName, () => App);
