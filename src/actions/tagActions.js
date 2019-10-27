import {ADD_TAG, REMOVE_TAG, UPDATE_TAG, GET_TAG} from "../types";
import axios from 'axios';

export const get = (data) => {
	return (dispatch) => {
		axios.get('/tags')
			.then((response) => {
				dispatch({
					type: GET_TAG,
					payload: response.data
				})
			});
	}
};

export const save = (data) => {
    return (dispatch) => {
		axios.post('/tags', data)
			.then((response) => {
				dispatch({
					type: ADD_TAG,
					payload: response.data
				});

				alert("성공적으로 추가되었습니다.");
			});
    }
};

export const remove = (data) => {
	axios.delete('/tags/' + data.id);

    return (dispatch) => {
        dispatch({
            type: REMOVE_TAG,
            payload: data
        })
    }
};

export const update = (data) => {
	axios.patch('/tags/' + data.id, data);

    return (dispatch) => {
        dispatch({
           type: UPDATE_TAG,
           payload: data
        });
    }
};