import {combineReducers} from 'redux';
import commonReducers from './commonReducers';
import contentsReducers from './contentsReducers';

export default combineReducers({
	commonStates: commonReducers,
	contentsStates: contentsReducers
});