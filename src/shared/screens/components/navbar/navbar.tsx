import React from 'react';
import { NavbarContainer, NavbarLink } from './navbar.styles';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarLink to="/">Inicio</NavbarLink>
      <NavbarLink to="/creditos">Creditos</NavbarLink>
    </NavbarContainer>
  );
};

export default Navbar;
