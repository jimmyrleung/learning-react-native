import actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    email: '',
    password: ''
};

/* 
Reducers produce a new state in a way that we work with immutable states,
that's why we return a new object instead of modifying the current state obj
*/
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case actionTypes.PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        default:
            return state;
    }
};