import Cookies from 'js-cookie'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthRoutes = () => {
    if(!Cookies.get("token"))
    return <Navigate to='/login' />
    return <Outlet />
}

export default AuthRoutes