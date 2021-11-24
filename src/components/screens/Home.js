import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllPayments } from '../../api/payment'
import { customAlert } from '../../helpers/customAlert'
import { types } from '../../types/types'
import { HomeButtons } from '../ui/HomeButtons'
import { Payments } from '../ui/Payments'

export const Home = () => {

    const dispatch = useDispatch()
    const { auth, ui } = useSelector( state => state )

    useEffect(() => {
        fetchPayments()
    }, [])

    const fetchPayments = async () => {
        const data = await getAllPayments(auth.user.name, auth.user.password)
        
        if ( data.ok )
            dispatch({
                type: types.loadPayments,
                payload: data.payments
            })
        else 
            customAlert.fire({
                title: 'Error',
                icon: 'error',
                text: 'Something went wrong'
            })
    }

    return (
        <div>
            <HomeButtons />
            
            {
                ui.showPayments && 
                (
                    <Payments />
                )
            }
        </div>
    )
}
