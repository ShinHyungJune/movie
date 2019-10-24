import {SET_POP, SET_LOADING} from "../types";

const initialState = {
	pop : null,
	loading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;

		case SET_POP:
			return {
				...state,
				pop: action.payload
			};

		case SET_LOADING:
			return {
				...state,
				loading: action.payload
			}
	}	
};