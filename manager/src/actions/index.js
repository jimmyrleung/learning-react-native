import firebase from 'firebase';
import actionTypes from './actionTypes';

export const emailChanged = (text) => {
    return {
        type: actionTypes.EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: actionTypes.PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return async (dispatch) => {
        try {
            const user = await firebase
                .auth()
                .signInWithEmailAndPassword(email, password);
            console.log("Firebase user", user);
            dispatch({ type: actionTypes.LOGIN_USER_SUCCESS, payload: user });
        }
        catch (ex) {
            console.log("Error while signing in", ex);
        }
    }

};