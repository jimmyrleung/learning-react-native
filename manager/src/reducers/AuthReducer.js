import actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    email: 'test@test.com',
    password: '',
    user: null,
    error: '',
    loading: false
};

/* 
Reducers produce a new state in a way that we work with immutable states,
that's why we return a new object instead of modifying the current state obj
*/
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.EMAIL_CHANGED:
            return { ...state, email: action.payload };

        case actionTypes.PASSWORD_CHANGED:
            return { ...state, password: action.payload };

        case actionTypes.LOGIN_USER_SUCCESS:
            console.log("User: ", action.payload);
            return { ...state, loading: false, error: '', user: action.payload };

        case actionTypes.LOGIN_USER_ERROR:
            return { ...state, loading: false, error: 'Authentication failed.' };

        case actionTypes.TOGGLE_AUTH_SPINNER:
            return { ...state, loading: action.payload };

        default:
            return state;
    }
};