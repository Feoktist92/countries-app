import {
    CLEAR_DETAILS,
    SET_COUNTRY,
    SET_ERROR,
    SET_LOADING,
    SET_NEIGHBORS,
} from './details-action';

const initialState = {
    country: null,
    status: 'idle', //loading | received | error
    error: null,
    neighbors: [],
};
export const detailsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
                error: null,
            };
        case SET_ERROR:
            return {
                ...state,
                status: 'rejected',
                error: payload,
            };
        case SET_COUNTRY:
            return {
                ...state,
                status: 'received',
                country: payload,
            };
        case SET_NEIGHBORS:
            return {
                ...state,
                neighbors: payload,
            };
        case CLEAR_DETAILS:
            return initialState;
        default:
            return state;
    }
};
