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
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCES,
    PRODUCT_UPDATE_FAILED,
} from '../constants/productContstans'
import axios from 'axios'

export const listProducts = () => async (dispatch) =>  {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})

        const {data} = await axios.get('/api/products')

        dispatch({
            type: PRODUCT_LIST_SUCCES,
            payload: data
        })
    }catch(error){
        dispatch({
            type: PRODUCT_LIST_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const listProductDetails = (id) => async (dispatch) =>  {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})

        const {data} = await axios.get(`/api/products/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCES,
            payload: data
        })
    }catch(error){
        dispatch({
            type: PRODUCT_DETAILS_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const deleteProduct = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_DELETE_REQUEST,
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        await axios.delete(`/api/products/${id}`, config)
        
        dispatch( {
            type: PRODUCT_DELETE_SUCCES
        })
    } catch(error) {
        dispatch({
            type: PRODUCT_DELETE_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const createProduct = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REQUEST,
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.post(`/api/products`, {}, config)
        
        dispatch( {
            type: PRODUCT_CREATE_SUCCES,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: PRODUCT_CREATE_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const updateProduct = (product) => async(dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_UPDATE_REQUEST,
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.put(`/api/products/${product._id}`,product, config)
        
        dispatch( {
            type: PRODUCT_UPDATE_SUCCES,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: PRODUCT_UPDATE_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}