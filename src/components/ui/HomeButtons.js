import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { types } from '../../types/types'
import { ModalAdd } from './ModalAdd'

export const HomeButtons = () => {
    
    const dispatch = useDispatch()
    const { showPayments } = useSelector(state => state.ui)

    const handleTogglePaymentsVisibility = () => {
        dispatch({
            type: types.togglePayments
        })
    }

    return (
        <div className="d-flex justify-content-between mb-3">
            <button 
                className="btn btn-primary"
                onClick={handleTogglePaymentsVisibility}
            >
                {
                    (showPayments) 
                        ? 'Hide payments'
                        : 'Show payments'
                }
            </button>

            <button 
                className="btn btn-success"
                data-toggle="modal" data-target="#modal"
            >
                <i className="fa fa-add"></i> Add payments
            </button>

            <ModalAdd idModal="modal" />
            
        </div>
    )
}
