import {ADD_MOVIE, GET_MOVIE} from "../types";
import axios from 'axios';

export const get = (data) => {
	return (dispatch) => {
		axios.get('/movies')
			.then((response) => {
				dispatch({
					type: GET_MOVIE,
					payload: response.data
				});
			});

	}
};

export const save = (data) => {
	return (dispatch) => {
		dispatch({
			type: ADD_MOVIE,
			payload: data
		})
	}
};