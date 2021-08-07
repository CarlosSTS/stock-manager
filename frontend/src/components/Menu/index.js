import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { Context } from '../../AuthContext/AuthContext';

import { NavList } from './styles';

 const Menu = () => {
    const { handleLogout } = useContext(Context);
    return (
        <NavList>
            <NavLink to="/dashboard"><li>Dashboard</li></NavLink>
            <NavLink to="/list"><li>Produtos</li></NavLink>
            <NavLink to="#" onClick={handleLogout}><li>Sair</li></NavLink>
        </NavList>
    )
}

export default Menu;