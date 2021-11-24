import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { changePassword } from '../../api/auth'
import { customAlert } from '../../helpers/customAlert'
import { types } from '../../types/types'

export const Profile = () => {

    const dispatch = useDispatch()
    const { user } = useSelector( state => state.auth )
    const [ formVisibility, setFormVisibility ] = useState(false)
    const [ newPassword, setNewPassword ] = useState('')
    const [ repeatPassword, setRepeatPassword ] = useState('')
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        if ( newPassword !== repeatPassword )
        {
            customAlert.fire({
                title: 'Error',
                icon: 'error',
                text: 'The passwords do not match'
            })
        }
        else {
            const response = await changePassword(user.name, user.password, newPassword)

            if ( response.ok ) {
                customAlert.fire({
                    title: 'Password changed',
                    icon: 'success',
                    text: 'The password was correctly updated'
                })
    
                dispatch({
                    type: types.changePassword,
                    payload: {
                        ...user,
                        password: newPassword
                    }
                })
            }
            else {
                customAlert.fire({
                    title: 'Error',
                    icon: 'error',
                    text: 'Something went wrong'
                })
            }

            
        }
    }

    const onChangeNewPassword = (event) => {
        setNewPassword(event.target.value)
    }

    const onChangeRepeatPassword = (event) => {
        setRepeatPassword(event.target.value)
    }

    return (
        <>
            <h1>My profile</h1>
            <hr />

            <div>
                <p>Your username is { user.name }</p>
                <button className="btn btn-primary" onClick={() => setFormVisibility(!formVisibility)}>
                    Change password
                </button>
            </div>

            { formVisibility && 
                <>
                    <hr />
                    <form className="mt-3" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Password</label>
                            <input value={newPassword} onChange={onChangeNewPassword} type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label>Confirm password</label>
                            <input value={repeatPassword} onChange={onChangeRepeatPassword} type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button 
                            className="btn btn-success mt-3"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </>
            }
        </>
    )
}
