import actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.EMPLOYEES_FETCH_SUCCESS:
            console.log(action);
            return action.payload;
        default:
            return state;
    }
}
