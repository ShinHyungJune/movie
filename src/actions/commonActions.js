import {SET_LOADING, SET_POP} from "../types";

export const setLoading = (data) => {
	return (dispatch) => {
		dispatch({
			type: SET_LOADING,
			payload: data
		});
	};
};

export const setPop = (data) => {
	return (dispatch) => {
		dispatch({
			type: SET_POP,
			payload: data
		});
	};
};

