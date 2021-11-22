import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'

export const Login = () => {

    const navigate = useNavigate()
    const { dispatch } = useContext(AuthContext)

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Jorfe',
                logged: 'true'
            }
        }

        dispatch(action)

        navigate('/', {
            replace: true
        })
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
