import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

export const PublicRoute = ({ children }) => {

    const { logged } = useSelector(state => state.auth)

    return logged 
        ? <Navigate to="/" />
        : children
}
