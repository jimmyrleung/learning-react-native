import actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: 'Monday'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.EMPLOYEE_FORM_UPDATE:
            // [action.payload.prop] = Key interpolation
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            }
        default:
            return state;
    }
}
