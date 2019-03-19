// The combineReducers allow us to easily combine multiple pieces of state
// and make them play nice together
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
    libraries: LibraryReducer
});