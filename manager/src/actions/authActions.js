import actionTypes from './actionTypes';
import AuthService from '../services/AuthService';
import { Actions } from 'react-native-router-flux';

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
        dispatch({ type: actionTypes.TOGGLE_AUTH_SPINNER, payload: true });

        try {
            const user = await AuthService.login({ email, password });
            dispatch({ type: actionTypes.LOGIN_USER_SUCCESS, payload: user });
            Actions.main();
        }
        catch (ex) {
            console.log("Error while signing in", ex);
            dispatch({ type: actionTypes.LOGIN_USER_ERROR });
        }
    }
};