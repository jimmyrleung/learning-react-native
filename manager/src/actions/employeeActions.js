import firebase from 'firebase';
import actionTypes from './actionTypes';
import { Actions } from 'react-native-router-flux';

export const employeeFormUpdate = ({ prop, value }) => {
    return {
        type: actionTypes.EMPLOYEE_FORM_UPDATE,
        payload: { prop, value }
    };
};

export const employeeFormReset = () => {
    return {
        type: actionTypes.EMPLOYEE_FORM_RESET
    };
};


export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        // That's our reference in the firebase db
        // {
        //     "users": "{
        //         "123456": {
        //             "employees": []
        //         }
        //     }
        // }
        console.log({ name, phone, shift })
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift }) // push into our collection
            .then(() => {
                dispatch({
                    type: actionTypes.EMPLOYEE_CREATE,
                    payload: { name, phone, shift }
                });

                // reset (eliminates the back arrow on the header)
                Actions.employeeList({ type: 'reset' });
            })
            .catch((err) => console.log(err))
    }
};

export const fetchEmployees = () => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        // Anytime we get a new value from that ref, get a snapshot from this data
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({
                    type: actionTypes.EMPLOYEES_FETCH_SUCCESS,
                    payload: snapshot.val()
                });
            });
    }
}

export const employeeUpdate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        // That's our reference in the firebase db
        // {
        //     "users": "{
        //         "123456": {
        //             "employees": []
        //         }
        //     }
        // }

        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift }) // push into our collection
            .then(() => {
                dispatch({
                    type: actionTypes.EMPLOYEE_CREATE,
                    payload: { name, phone, shift }
                });

                // reset (eliminates the back arrow on the header)
                Actions.employeeList({ type: 'reset' });
            });
    }
};