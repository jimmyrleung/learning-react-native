import firebase from 'firebase';
import actionTypes from './actionTypes';

export const employeeFormUpdate = ({ prop, value }) => {
    return {
        type: actionTypes.EMPLOYEE_FORM_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    // That's our reference in the firebase db
    // {
    //     "users": "{
    //         "123456": {
    //             "employees": []
    //         }
    //     }
    // }
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift }); // push into our collection

    return {
        type: actionTypes.EMPLOYEE_CREATE,
        payload: { name, phone, shift }
    };
};