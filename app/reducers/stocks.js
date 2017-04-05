import { FETCH_STOCK, FETCH_STOCK_SUCCESS, FETCH_STOCK_ERROR } from '../actions/stocks';

const initialState = {
    items: [],
    inProgress: false,
    error: null
};

export default function stocks(state = initialState, action) {
    switch (action.type) {
        case FETCH_STOCK:
            return {
                ...state,
                inProgress: true,
                error: false
            };
        case FETCH_STOCK_SUCCESS:
            return {
                ...state,
                items: action.value,
                inProgress: false
            };
        case FETCH_STOCK_ERROR:
            return {
                ...state,
                inProgress: false,
                error: action.error
            };
        default:
            return state;
    }
}
