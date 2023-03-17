import Cookies from 'js-cookie'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  if(Cookies.get("token"))
    return <Navigate to='/' />
    return <Outlet />
}

export default ProtectedRoutes