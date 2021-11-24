import { types } from "../types/types"

const initialState = {
  showPayments: false
}

export const uiReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case types.togglePayments:
            return {
                ...state,
                showPayments: !state.showPayments
            }

        default:
            return state
    }
}