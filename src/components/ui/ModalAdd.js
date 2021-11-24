import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPayment } from '../../api/payment'
import { customAlert } from '../../helpers/customAlert'
import { types } from '../../types/types'
import { Modal } from './Modal'

export const ModalAdd = ({idModal}) => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)

    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState(0)

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const onChangeAmount = (e) => {
        setAmount(e.target.value)
    }

    const onAddPayment = async () => {
        if ( amount < 0 ) {
            customAlert.fire({
                title: 'Error',
                icon: 'error',
                text: 'Amount cannot be negative'
            })
            return;
        }

        const response = await addPayment(user.name, user.password, {
            description,
            amount
        })

        if ( response.ok ) {
            dispatch({
                type: types.addPayment,
                payload: response.payment
            })

            customAlert.fire({
                title: 'Payment added',
                icon: 'success',
                text: 'The operation was a success'
            })
        }
        else 
            customAlert.fire({
                title: 'Error',
                icon: 'error',
                text: 'Something went wrong'
            })
    }

    return (
        <Modal 
            idModal={idModal}
            title="Add payment" 
            nameAction="Add" 
            description={description} 
            amount={amount}
            onChangeDescription={onChangeDescription}
            onChangeAmount={onChangeAmount}
            handleOnClick={onAddPayment}
        />
    )
}
