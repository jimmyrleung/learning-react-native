import actionTypes from './actionTypes';

export const employeeFormUpdate = ({ prop, value }) => {
    return {
        type: actionTypes.EMPLOYEE_FORM_UPDATE,
        payload: { prop, value }
    };
};