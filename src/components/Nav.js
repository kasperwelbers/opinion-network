import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'

const Nav = ({ handlePopupOpen }) => (
  <nav className="Nav">
    <div className="Nav--Container container">
      <Link to="/">
        <Logo />
      </Link>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/workinggroups/" exact>
        WGs
      </NavLink>
      <NavLink to="/blog/" exact>
        Blog
      </NavLink>
      <NavLink to="/contact/" exact>
        Contact
      </NavLink>
    </div>
  </nav>
)

export default Nav
