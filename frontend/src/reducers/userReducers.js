import {
  USER_DETAILS_FAILED,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCES,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCES,
  USER_LOGOUT,
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCES,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCES,
  USER_UPDATE_PROFILE_FAILED,
  USER_UPDATE_PROFILE_RESET,
  USER_DETAILS_RESET
} from '../constants/userConstants'
  
export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { loading: true }
      case USER_LOGIN_SUCCES:
        return { loading: false, userInfo: action.payload }
      case USER_LOGIN_FAILED:
        return { loading: false, error: action.payload }
      case USER_LOGOUT:
        return {}
      default:
        return state
    }
}
  
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true }
      case USER_REGISTER_SUCCES:
        return { loading: false, userInfo: action.payload }
      case USER_REGISTER_FAILED:
        return { loading: false, error: action.payload }
      default:
        return state
    }
}
  
export const userDetaillsReducer = (state = { user: {}}, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {...state, loading: true }
    case USER_DETAILS_SUCCES:
      return { loading: false, user: action.payload }
    case USER_DETAILS_FAILED:
      return { loading: false, error: action.payload }
    case USER_DETAILS_RESET:
      return { user: {} }
    default:
      return state
  }
}

export const userUpdateProfileReducer = (state = { user: {}}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true }
    case USER_UPDATE_PROFILE_SUCCES:
      return { loading: false, succes: true, userInfo: action.payload }
    case USER_UPDATE_PROFILE_FAILED:
      return { loading: false, error: action.payload }
    case USER_UPDATE_PROFILE_RESET: 
      return {}
    default:
      return state
  }
}