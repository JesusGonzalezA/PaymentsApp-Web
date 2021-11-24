import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deletePayment, updatePayment } from '../../api/payment'
import { customAlert } from '../../helpers/customAlert'
import { types } from '../../types/types'

export const Payment = ({payment}) => {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const [ formVisibility, setFormVisibility ] = useState(false)

    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState(0)

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const onChangeAmount = (e) => {
        setAmount(e.target.value)
    }

    const handleDelete = async () => {
        const response = await deletePayment(user.name, user.password, payment.id)

        if ( response.ok ) {
            dispatch({
                type: types.deletePayment,
                payload: payment.id
            })
        }
        else 
            customAlert.fire({
                title: 'Error',
                icon: 'error',
                text: 'Something went wrong'
            })
    }

    const handleEdit = async (e) => {
        e.preventDefault()

        const newPayment = {
            ...payment,
            description,
            amount
        }

        const response = await updatePayment(user.name, user.password, payment.id, newPayment)

        if ( response.ok ) {
            dispatch({
                type: types.updatePayment,
                payload: newPayment
            })

            customAlert.fire({
                title: 'Updated',
                icon: 'success',
                text: 'Updated'
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
        <>
        <div>
            <div className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{payment.user.username}</div>
                    {payment.description}
                </div>
                <span className="badge bg-primary rounded-pill">
                    {payment.amount} €
                </span>
            </div>

            <div className="d-flex mt-2">
                <button className="btn btn-warning mx-2" onClick={() => setFormVisibility(!formVisibility)}>
                    <i className="fa fa-edit"></i>Edit
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                    <i className="fa fa-trash"></i>Delete
                </button>
            </div>
        </div>
        {
            (formVisibility) && 
            <form className="m-3" onSubmit={handleEdit}>
                    <div className="form-group">
                        <label>Description</label>
                        <input value={description} onChange={onChangeDescription} type="text" className="form-control" placeholder="Enter description" />
                    </div>
                    <div className="form-group">
                        <label>Amount</label>
                        <input min={0} step={0.01} value={amount} onChange={onChangeAmount} type="number" className="form-control" placeholder="Amount" />
                    </div>
                    <button type="submit" className="btn btn-success mt-2 mb-2">
                        <i className="fa fa-save"></i>Save changes
                    </button>
            </form>
        }
        </>
    )
}
