import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { login } from '../../api/auth'
import { types } from '../../types/types'
import { UserForm } from '../ui/UserForm'
import { customAlert } from '../../helpers/customAlert'

export const Login = () => {

    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()
        
        const response = await login(username, password)

        if ( response.ok ){
            dispatch({ 
                type: types.login, 
                payload: { name: username, password } 
            })
            localStorage.setItem('user', JSON.stringify({ name: username, password }))
        }
        else {
            customAlert.fire({
                title: 'Error',
                icon: 'error',
                text: response.error
            })
        }
    }


    return (
        <div className="container mt-5">
            <h1>Login</h1>

            <Link to="/register">
                Don't have an account yet?
            </Link>

            <hr />

            <UserForm 
                handleSubmit={handleLogin}
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                buttonLabel="Login"
            />
        </div>
    )
}
