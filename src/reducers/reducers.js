import {combineReducers} from 'redux';
import commonReducers from './commonReducers';
import tagsReducers from './tagReducers';

export default combineReducers({
	commonStates: commonReducers,
	tagsStates: tagsReducers
});