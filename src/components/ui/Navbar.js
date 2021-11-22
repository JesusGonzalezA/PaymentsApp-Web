import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'

export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext)
    
    const handleLogout = () => {
        const action = {
            type: types.logout
        }

        dispatch(action)
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
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                    <span className="nav-item nav-link text-info">
                        { user.name }
                    </span>
                    
                    <button
                        className="nav-item nav-link btn"
                        onClick={  handleLogout }
                    >
                        Logout
                    </button>
                
                </ul>
            </div>
        </nav>
    )
}