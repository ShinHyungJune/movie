import {SET_MOVIES, SET_MOVIE, ADD_MOVIE, DELETE_MOVIE, UPDATE_MOVIE} from "../types";

const initialState = {
	movie: null,
	movies: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;

		case SET_MOVIES:
			return {
				...state,
				movies: action.payload
			};

		case SET_MOVIE:
			return {
				...state,
				movie: action.payload
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

		case UPDATE_MOVIE:
			return {
				...state,
				movies: state.movies.map((movie) => {
					if(movie.id === action.payload.id)
						return action.payload;

					return movie;
				})
			}
	}
}