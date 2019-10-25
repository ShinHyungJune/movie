import {ADD_TAG, REMOVE_TAG, UPDATE_TAG} from "../types";

export const addTag = (data) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TAG,
            payload: data
        })
    }
};

export const removeTag = (data) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_TAG,
            payload: data
        })
    }
};

export const updateTag = (data) => {
    return (dispatch) => {
        dispatch({
           type: UPDATE_TAG,
           payload: data
        });
    }
};