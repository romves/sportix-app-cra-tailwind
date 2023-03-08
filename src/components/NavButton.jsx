import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children, rute}) => {
  return (
    <Link to={rute} className='flex mx-2 my-2 items-center justify-center bg-primary-600 text-white text-lg p-2 rounded-md'>{children}</Link>
  )
}

export default Button