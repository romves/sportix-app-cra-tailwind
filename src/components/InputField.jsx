import React from 'react'

const InputField = ({type, name, placeholder}) => {
  return (
    <input type={type} name={name} placeholder={placeholder} className='p-3 my-1 rounded border border-black text-black'/>
  )
}

export default InputField