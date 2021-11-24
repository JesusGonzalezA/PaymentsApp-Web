import { types } from "../types/types"

const storageUser = JSON.parse(localStorage.getItem('user')) || null

const initialState = {
    user: storageUser,
    logged: (storageUser!==null)
}

export const authReducer = ( state = initialState, action ) => {

    switch( action.type ) {
        case types.login:
            return {
                ...state,
                user: action.payload,
                logged: true
            }
        
        case types.logout:
            return {
                ...state,
                user: null,
                logged: false
            }
        
        case types.changePassword:
            return {
                ...state,
                user: action.payload
            }

        default:
            return state
    }
}