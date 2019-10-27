import {ADD_TAG, REMOVE_TAG, UPDATE_TAG, SET_TAGS} from "../types";

const initialState = {
    tags : null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;

        case ADD_TAG:
            return {
                ...state,
                tags: [...state.tags, action.payload]
            };

        case REMOVE_TAG:
            let newTags = state.tags.filter(tag => tag.id !== action.payload.id);

            return {
                ...state,
                tags: newTags
            };
        case UPDATE_TAG:
            return {
                ...state,
                tags: state.tags.map((tag) => {
                    if(tag.id === action.payload.id)
                        return action.payload;

                    return tag;
                })
            };
        case SET_TAGS:
            return {
                ...state,
                tags: action.payload
            }
    }
};