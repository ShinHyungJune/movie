import {GET_MOVIE, ADD_MOVIE, DELETE_MOVIE} from "../types";
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
		axios.post('/movies', data)
			.then((response) => {
				dispatch({
					type: ADD_MOVIE,
					payload: response.data
				})
			});
	}
};

export const remove = (id) => {
	return (dispatch) => {
		axios.delete('/movies/' + id)
			.then((response) => {
				dispatch({
					type: DELETE_MOVIE,
					payload: id
				});

				window.history.back();
			});
	}
};