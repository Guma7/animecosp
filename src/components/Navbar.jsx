import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import theme from '../styles/theme';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${theme.colors.background.paper};
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${theme.shadows.medium};
  border-bottom: 2px solid ${theme.colors.primary};
`;

const Logo = styled.div`
  font-family: 'Russo One', 'Bangers', sans-serif;
  font-size: 2rem;
  color: ${theme.colors.primary};
  text-shadow: 0 0 5px rgba(255, 23, 68, 0.5);
  display: flex;
  align-items: center;
  cursor: default;
  letter-spacing: 1px;
  -webkit-text-stroke: 0.5px ${theme.colors.accent};
  
  span {
    color: ${theme.colors.accent};
    -webkit-text-stroke: 0.5px ${theme.colors.primary};
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${theme.colors.text.primary};
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 250px;
    height: 100vh;
    background: ${theme.colors.background.alt};
    padding-top: 3.5rem;
    transition: right 0.3s ease-in-out;
    box-shadow: ${theme.shadows.large};
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  
  @media (max-width: ${theme.breakpoints.md}) {
    margin: 1.5rem 0;
  }
`;

const NavLink = styled(Link)`
  color: ${theme.colors.text.primary};
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius.medium};
  transition: all 0.3s ease;
  position: relative;
  
  &:hover, &.active {
    color: ${theme.colors.highlight};
    background: rgba(255, 255, 255, 0.05);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${theme.colors.highlight};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover::after, &.active::after {
    width: 80%;
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${theme.colors.text.primary};
  display: none;
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo>
        ANIME<span>COSP</span>
      </Logo>
      
      <MenuIcon onClick={toggleMenu}>
        <FaBars />
      </MenuIcon>
      
      <NavMenu isOpen={isOpen}>
        <CloseIcon onClick={toggleMenu}>
          <FaTimes />
        </CloseIcon>
        
        <NavItem>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/schedule" onClick={() => setIsOpen(false)}>Programação</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/gallery" onClick={() => setIsOpen(false)}>Atrações</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contato</NavLink>
        </NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;