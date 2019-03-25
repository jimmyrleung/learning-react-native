import actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    email: '',
    password: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.EMAIL_CHANGED:
            return { email: action.payload, ...state }
        case actionTypes.PASSWORD_CHANGED:
            return { password: action.payload, ...state }
        default:
            return state;
    }
};