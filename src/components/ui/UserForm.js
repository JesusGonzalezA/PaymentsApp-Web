import React from 'react'

export const UserForm = ({
    handleSubmit,
    username,
    password,
    setUsername,
    setPassword,
    buttonLabel
}) => {

    const onChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="form-group">
                <label>Username</label>
                <input value={username} onChange={onChangeUsername} type="text" className="form-control" placeholder="Enter username" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input value={password} onChange={onChangePassword} type="password" className="form-control" placeholder="Password" />
            </div>
            <button 
                className="btn btn-primary mt-3"
                type="submit"
            >
                { buttonLabel }
            </button>
        </form>
    )
}
