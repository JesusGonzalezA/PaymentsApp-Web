import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserForm } from '../ui/UserForm'
import { register } from '../../api/auth'
import { customAlert } from '../../helpers/customAlert'

export const Register = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        
        const response = await register(username, password)

        if ( response.ok ){
            customAlert.fire({
                title: 'Success',
                icon: 'success',
                text: 'Registered'
            })
            navigate('login')
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
            <h1>Register</h1>

            <Link to="/login">
                Already have an account?
            </Link>

            <hr />

            <UserForm 
                handleSubmit={handleRegister}
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                buttonLabel="Register"
            />
        </div>
    )
}
