import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Nav>
      <NavLogo as={Link} to="/"> {/* Navigate to the home page */}
        <img src="/assets/logo.png" alt="RCAEC Logo" />
        <span>RCAEC</span>
      </NavLogo>
      <MenuToggle onClick={toggleMenu}>
        <span>&#9776;</span> {/* Hamburger icon */}
      </MenuToggle>
      <NavMenu isOpen={menuOpen}>
        <NavItem href="#about" onClick={() => setMenuOpen(false)}>About</NavItem>
        <NavItem href="#events" onClick={() => setMenuOpen(false)}>Events</NavItem>
        <NavItem href="#team" onClick={() => setMenuOpen(false)}>Team</NavItem>
        <NavItem href="#contact" onClick={() => setMenuOpen(false)}>Contact</NavItem>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #a4c931;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 60px;
  position: relative; /* Allow absolute positioning of child elements */

  @media (max-width: 768px) {
    padding: 0 20px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    height: 40px;
    margin-right: 10px;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }

  &:hover {
    color: #5643cc;
    text-shadow: 0 0 5px white;
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')}; /* Toggle menu visibility */
    width: 50%;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #a4c931;
    padding: 20px;
    z-index: 999;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  padding: 10px 15px;
  transition: color 0.3s, text-shadow 0.3s;

  &:hover {
    color: #5643cc;
    text-shadow: 0 0 5px white;
  }
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;
  margin-left: auto; /* Pushes the menu toggle to the right */
  position: absolute; /* Position relative to the Nav container */
  top: 15px; /* Adjust as needed to align with logo */
  right: 20px; /* Position near the right edge of the Nav container */

  @media (max-width: 768px) {
    display: block; /* Show hamburger icon on mobile */
  }
`;

export default Navbar;
