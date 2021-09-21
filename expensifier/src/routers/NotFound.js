import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404 error</h1>
      <NavLink to='/'>Go to home page</NavLink>
    </div>
  )
}

export default NotFound
