import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

/* In this component we must define all the different routes that can be visited  */
const RouterComponent = () => (
    <Router>
        {/* A root scene is required */}
        <Scene key='root'>
            <Scene key='login' component={LoginForm} title='Login' initial />
            <Scene key='employeeList' component={EmployeeList} title='Employee List' />
        </Scene>
    </Router>
);

export default RouterComponent;