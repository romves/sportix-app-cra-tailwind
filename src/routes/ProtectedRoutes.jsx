import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  if(window.localStorage.getItem("token"))
    return <Navigate to='/' />
    return <Outlet />
}

export default ProtectedRoutes