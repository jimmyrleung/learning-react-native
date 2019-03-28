import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

/* In this component we must define all the different routes that can be visited  */
const RouterComponent = () => (
    <Router>
        {/* A root scene is required */}
        {/* Each key will be translated into a navigation method */}
        <Scene key='root' hideNavBar>
            {/* Auth flow  */}
            <Scene key='auth'>
                <Scene
                    key='login'
                    component={LoginForm}
                    title='Login'
                    initial
                />
            </Scene>

            {/* Main flow */}
            <Scene key='main'>
                <Scene
                    rightTitle='Add'
                    onRight={() => { Actions.employeeForm(); }}
                    key='employeeList'
                    component={EmployeeList}
                    title='Employee List'
                    initial
                />
                <Scene
                    key='employeeForm'
                    component={EmployeeForm}
                    title='Register new employee'
                />
            </Scene>
        </Scene>
    </Router>
);

export default RouterComponent;