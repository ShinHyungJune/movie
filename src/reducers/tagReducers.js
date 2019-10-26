import {ADD_TAG, REMOVE_TAG, UPDATE_TAG, GET_TAG} from "../types";

const initialState = {
    tags : [],
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
        case GET_TAG:
            return {
                ...state,
                tags: action.payload
            }
    }
};