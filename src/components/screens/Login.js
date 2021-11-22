import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../api/auth'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'
import { UserForm } from '../ui/UserForm'
import { customAlert } from '../../helpers/customAlert'

export const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { dispatch } = useContext(AuthContext)

    const handleLogin = async (e) => {
        e.preventDefault()
        
        const response = await login(username, password)

        if ( response.ok ){
            dispatch({ 
                type: types.login, 
                payload: { name: username, password } 
            })
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
