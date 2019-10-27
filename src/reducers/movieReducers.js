import {GET_MOVIE, ADD_MOVIE, DELETE_MOVIE} from "../types";

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
			};

		case ADD_MOVIE:
			return {
				...state,
				movies: [...state.movies, action.payload]
			};

		case DELETE_MOVIE:
			return {
				...state,
				movies: state.movies.filter(movie => movie.id !== action.payload)
			};
	}
}