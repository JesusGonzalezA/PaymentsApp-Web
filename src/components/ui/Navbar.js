import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { types } from '../../types/types'
import { customAlert } from '../../helpers/customAlert'
import { deleteUser } from '../../api/auth'

export const Navbar = () => {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    
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
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 mb-3">
            
            {/* Hamburguer menu */}
            <button className="navbar-toggler mt-0 mt-lg-0" type="button" data-toggle="collapse" data-target="#navbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Brand logo */}
            <div className="mt-1 mt-lg-0">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    <i className="fa fa-home-user"></i>
                </Link>
            </div>

            {/* Collapsable navbar */}
            <div className="collapse navbar-collapse justify-content-between" id="navbar">
                <ul className="navbar-nav mt-0 mt-lg-0">
                    <li className="nav-item">
                        <NavLink 
                            className={ ({isActive}) => 'nav-item nav-link ' + ( isActive ? 'active' : '' ) }
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink 
                            className={ ({isActive}) => 'nav-item nav-link ' + ( isActive ? 'active' : '' ) }
                            to="/about"
                        >
                            About
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink 
                            className={ ({isActive}) => 'nav-item nav-link ' + ( isActive ? 'active' : '' ) }
                            to="/profile"
                        >
                            My profile
                        </NavLink>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto align-content-end">
                
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
                        <i className="fa fa-sign-out-alt"></i> Sign out
                    </button>
            
                </ul>
            </div>
        </nav>
    )
}