import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'
import { customAlert } from '../../helpers/customAlert'
import { deleteUser } from '../../api/auth'

export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext)
    
    const handleLogout = () => {
        const action = {
            type: types.logout
        }

        dispatch(action)
    }

    const handleDeleteUser = async () => {
        const response = await deleteUser(user.name, user.password)

        if ( response.ok ){
            customAlert.fire({
                title: 'Success',
                icon: 'success',
                text: `Deleted user ${user.name}`
            })

            dispatch({ 
                type: types.logout
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

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Home
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        className={ ({isActive}) => 'nav-item nav-link ' + ( isActive ? 'active' : '' ) }
                        to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        className={ ({isActive}) => 'nav-item nav-link ' + ( isActive ? 'active' : '' ) }
                        to="/about"
                    >
                        About
                    </NavLink>

                    <NavLink
                        className={ ({isActive}) => 'nav-item nav-link ' + ( isActive ? 'active' : '' ) }
                        to="/profile"
                    >
                        My profile
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                    <span className="nav-item nav-link text-info">
                        { user.name }
                    </span>
                    
                    <button
                        className="nav-item nav-link btn"
                        onClick={ handleDeleteUser }
                    >
                       <i className="fas fa-trash-alt"></i> Delete
                    </button>

                    <button
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                
                </ul>
            </div>
        </nav>
    )
}