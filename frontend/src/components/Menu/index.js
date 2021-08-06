import React from 'react'
import { Link } from 'react-router-dom';

import { NavList } from './styles';

const Menu = () => {
  return (
    <NavList>
      <Link to="/dashboard">Dashboard</Link><br />
      <Link to="/list">Listar</Link><br />
    </NavList>
  )
}

export default Menu
