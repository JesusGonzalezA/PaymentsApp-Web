import { combineReducers } from 'redux'
import { paymentReducer } from './paymentReducer'
import { authReducer } from './authReducer'
import { uiReducer } from './uiReducer'

export const rootReducer = combineReducers({
    ui: uiReducer,
    payment: paymentReducer,
    auth: authReducer
})