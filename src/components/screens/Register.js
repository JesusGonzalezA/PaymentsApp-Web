import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
    
    const navigate = useNavigate()

    const handleRegister = () => {
        navigate('/', {
            replace: true
        })
    }

    return (
        <div className="container mt-5">
            <h1>Register</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ handleRegister }
            >
                Login
            </button>
        </div>
    )
}
