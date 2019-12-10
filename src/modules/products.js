import { } from 'redux'
import Axios from 'axios';
import { URL_PRODUCT_LIST } from '../constants';

export const initailProduct = {
    name: "",
    label: "",
    stock: 0,
    price: 0,
}

export const initialState = {
    rows: [],
    loading: false,
    error: "",
    currentRow: initailProduct,
}
//==================================================================
//Reducers 
//==================================================================
export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ..._getCommonState(state),
                rows: action.payload
            }
        case 'PRODUCT_BEING_LOADING':
            return {
                ..._getCommonState(state),
                loading: true
            }
        case 'PRODUCT_ERROR':
            return {
                ..._getCommonState(state),
                error: action.payload
            }
        case 'SET_CURRENT_PRODUCT':
            return {
                ..._getCommonState(state),
                currentRow: action.payload
            }
        default:
            return state;
    }
}

const _getCommonState = (state) => ({
    ...state,
    error: "",
    loading: false
})

//==================================================================
//Actions
//==================================================================
export const fetchProductSuccess = (products) => ({
    type: 'FETCH_PRODUCT_SUCCESS',
    payload: products
});

export const ProductBeingLoading = () => ({
    type: 'PRODUCT_BEING_LOADING',
});

export const ProductError = (err) => ({
    type: 'PRODUCT_ERROR',
    payload: err.message || err
});

export const SetCurrentProduct = (product) => ({
    type: 'SET_CURRENT_PRODUCT',
    payload: product
});

//==================================================================
//Async Operations
//==================================================================
export const fetchProduct = () => {
    return async (dispatch, getState) => {
        dispatch(ProductBeingLoading());
        try {
            const res = await Axios.get(URL_PRODUCT_LIST);
            dispatch(fetchProductSuccess(res.data));
        } catch (error) {
            dispatch(ProductError(error))
        }
    }
}