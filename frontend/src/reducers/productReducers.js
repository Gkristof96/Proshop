import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCES,
    PRODUCT_LIST_FAILED,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCES,
    PRODUCT_DETAILS_FAILED,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCES,
    PRODUCT_DELETE_FAILED,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCES,
    PRODUCT_CREATE_FAILED,
    PRODUCT_CREATE_RESET,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCES,
    PRODUCT_UPDATE_FAILED,
    PRODUCT_UPDATE_RESET,
} from '../constants/productContstans'

export const productListReducer = (state = { products: [] }, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: []}
        case PRODUCT_LIST_SUCCES:
            return { loading: false, products: action.payload}
        case PRODUCT_LIST_FAILED:
            return { loading: false, error: action.payload}
        default:
            return state
    }
}

export const productDetailsReducer = (state = { product: { reviews: []} }, action) => {
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state}
        case PRODUCT_DETAILS_SUCCES:
            return { loading: false, product: action.payload}
        case PRODUCT_DETAILS_FAILED:
            return { loading: false, error: action.payload}
        default:
            return state
    }
}

export const productDeleteReducer = (state = {}, action) => {
    switch(action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true }
        case PRODUCT_DELETE_SUCCES:
            return { loading: false, success: true }
        case PRODUCT_DELETE_FAILED:
            return { loading: false, error: action.payload}
        default:
            return state
    }
}

export const createProductReducer = (state = {}, action) => {
    switch(action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true }
        case PRODUCT_CREATE_SUCCES:
            return { loading: false, success: true, product: action.payload }
        case PRODUCT_CREATE_FAILED:
            return { loading: false, error: action.payload}
        case PRODUCT_CREATE_RESET:
            return {}
        default:
            return state
    }
}

export const productUpdateReducer = (state = { product: {} }, action) => {
    switch(action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { loading: true }
        case PRODUCT_UPDATE_SUCCES:
            return { loading: false, success: true, product: action.payload }
        case PRODUCT_UPDATE_FAILED:
            return { loading: false, error: action.payload}
        case PRODUCT_UPDATE_RESET:
            return { product: {} }
        default:
            return state
    }
}