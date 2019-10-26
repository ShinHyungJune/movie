import {GET_MOVIE} from "../types";

const initialState = {
	movies: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;

		case GET_MOVIE:
			return {
				...state,
				movies: action.payload
			}
	}
}