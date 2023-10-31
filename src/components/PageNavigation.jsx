import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
    <div >
      <NavLink className=' text-3xl text-blue-600' to="/">Home</NavLink>/ <h1 className=' text-3xl'>{title}</h1> 
    </div>
  )
}

export default PageNavigation
