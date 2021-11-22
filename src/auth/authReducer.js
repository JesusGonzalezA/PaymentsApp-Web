import { types } from "../types/types";

export const authReducer = ( state = {}, action ) => {

    switch( action.type ) {
        case types.login:
            return {
                ...state,
                ...action.payload,
                logged: true
            }
        
        case types.logout:
            return {
                ...state,
                ...action.payload,
                logged: false
            }
        
        case types.changePassword:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}