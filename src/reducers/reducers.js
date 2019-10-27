import {combineReducers} from 'redux';
import commonReducers from './commonReducers';
import tagReducers from './tagReducers';
import movieReducers from './movieReducers';

export default combineReducers({
	commonStates: commonReducers,
	tagStates: tagReducers,
	movieStates: movieReducers
});