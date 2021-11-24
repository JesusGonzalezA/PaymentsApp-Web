import React from 'react'
import { useSelector } from 'react-redux'
import { Payment } from './Payment'

export const Payments = () => {

    const { payments } = useSelector(state => state.payment)
   
    return (
        <ul className="list-group">
            { payments.map( (payment) => (
                <li 
                    className="list-group-item " 
                    key={payment.id}
                >
                    <Payment payment={payment} />
                </li>
            ))}
        </ul>
    )
}
