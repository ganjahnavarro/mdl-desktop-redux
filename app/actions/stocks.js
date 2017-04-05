import Fetch from '../common/fetch'

export const FETCH_STOCK = 'FETCH_STOCK_PENDING';
export const FETCH_STOCK_SUCCESS = 'FETCH_STOCK_SUCCESS';
export const FETCH_STOCK_ERROR = 'FETCH_STOCK_ERROR';

export function fetch(dispatch) {
    dispatch({type: FETCH_STOCK});

    Fetch.get("agent/",
        function(value) {
            dispatch({ type: FETCH_STOCK_SUCCESS, value });
        }, function(error){
            dispatch({ type: FETCH_STOCK_ERROR, error });
        }
    );
}
