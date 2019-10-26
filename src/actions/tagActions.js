import {ADD_TAG, REMOVE_TAG, UPDATE_TAG, SET_TAGS} from "../types";
import axios from 'axios';

export const set = (data) => {
    return (dispatch) => {
        dispatch({
            type: SET_TAGS,
            payload: data
        })
    }
};

export const save = (data) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TAG,
            payload: data
        })
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