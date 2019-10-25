import {ADD_TAG, REMOVE_TAG, UPDATE_TAG, SET_TAGS} from "../types";
import axios from 'axios';

export const addTag = (data) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TAG,
            payload: data
        })
    }
};

export const removeTag = (data) => {
	axios.delete('/tags/' + data.id);

    return (dispatch) => {
        dispatch({
            type: REMOVE_TAG,
            payload: data
        })
    }
};

export const updateTag = (data) => {
	axios.patch('/tags/' + data.id, data);

    return (dispatch) => {
        dispatch({
           type: UPDATE_TAG,
           payload: data
        });
    }
};

export const setTags = (data) => {
	return (dispatch) => {
		dispatch({
			type: SET_TAGS,
			payload: data
		});
	}
};