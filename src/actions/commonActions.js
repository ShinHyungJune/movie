import {SET_LOADING, SET_POP} from "../types";

const setLoading = (data) => {
	return (dispatch) => {
		dispatch({
			type: SET_LOADING,
			payload: data
		});
	};
};

const setPop = (data) => {
	return (dispatch) => {
		dispatch({
			type: SET_POP,
			payload: data
		});
	};
};

const actions = {
	setLoading,
	setPop
};

export default actions;