import {SET_MOVIES, SET_MOVIE, ADD_MOVIE, DELETE_MOVIE, UPDATE_MOVIE, SET_POP} from "../types";
import axios from 'axios';

export const get = (word) => {
	let url = word ? `/movies?q=${word}` : '/movies';

	return (dispatch) => {
		axios.get(url)
			.then((response) => {
				dispatch({
					type: SET_MOVIES,
					payload: response.data
				});
			});
	}
};

export const show = (id) => {
	return (dispatch) => {
		axios.get('/movies/' + id + "?_expand=tag")
			.then((response) => {
				dispatch({
					type: SET_MOVIE,
					payload: response.data
				})
			})
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

export const update = (id, data) => {
	 return (dispatch) => {
	 	axios.patch("/movies/" + id, data)
			.then((response) => {
				dispatch({
					type: UPDATE_MOVIE,
					payload: response.data
				});

				dispatch({
					type: SET_MOVIE,
					payload: response.data
				});

				dispatch({
					type: SET_POP,
					payload: null
				});
			});
	 }
};