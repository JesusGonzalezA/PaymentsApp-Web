import { types } from "../types/types"

const initialState = {
    payments: []
}

export const paymentReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case types.addPayment:
            return {
                ...state,
                payments: [ ...state.payments, action.payload ]
            }

        case types.loadPayments: 
            return {
                ...state,
                payments: action.payload
            }
        case types.deletePayment: 
            return {
                ...state,
                payments: state.payments.filter( payment => payment.id !== action.payload )
            }
        case types.updatePayment:
            return {
                ...state,
                payments: state.payments.map( 
                    (p) => (p.id === action.payload.id)
                            ? action.payload
                            : p
                )
            }

        default:
            return state
    }
}