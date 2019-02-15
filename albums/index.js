import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Header from './src/components/header';

const App = () => (
    <Header />
)

// At least one component must be registered
// Bootstrap our application called appName registering our App Component
// The App Component will be the first rendered component
AppRegistry.registerComponent(appName, () => App);