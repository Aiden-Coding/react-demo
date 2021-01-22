import { combineReducers } from 'redux';
// import headerReducer from '../common/header/store/reducer';
import {reducer as  headerReducer } from '../common/header/store';
const reducer = combineReducers({
	header: headerReducer,
});

export default reducer;
