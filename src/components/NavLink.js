import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavLink.css'

const NavLinkComp = ({ className, children, ...props }) => (
  <NavLink {...props} className={`NavLink ${className || ''}`}>
    {children}
  </NavLink>
)

export default NavLinkComp
