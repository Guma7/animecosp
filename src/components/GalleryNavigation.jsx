import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import theme from '../styles/theme';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
`;

const NavigationButton = styled(motion.button)`
  background: ${props => props.active ? props.accentColor || theme.colors.accent : 'transparent'};
  color: ${theme.colors.text.primary};
  border: 1px solid ${props => props.active ? props.accentColor || theme.colors.accent : 'rgba(255, 255, 255, 0.1)'};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.small};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background: ${props => props.active ? props.accentColor || theme.colors.accent : 'rgba(255, 255, 255, 0.05)'};
    transform: translateY(-2px);
  }
`;

const GalleryNavigation = ({ currentPath }) => {
  // Define as rotas e seus respectivos nomes e cores
  const routes = [
    { path: '/gallery/cosplay', name: 'Cosplay', color: '#C41230' }, // Vermelho mais escuro
    { path: '/gallery/paineis', name: 'Painéis', color: '#6A0DAD' }, // Roxo mais escuro e menos azulado
    { path: '/gallery/games', name: 'Games', color: '#2E7D32' }, // Verde médio escuro
    { path: '/gallery/art', name: 'Arte', color: '#0277BD' }, // Azul médio escuro
    { path: '/gallery/workshops', name: 'Workshops', color: theme.colors.dark }, // Azul escuro
  ];

  return (
    <NavigationContainer>
      {routes.map((route) => (
        <NavigationButton
          key={route.path}
          as={Link}
          to={route.path}
          active={currentPath === route.path}
          accentColor={route.color}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          {route.name}
        </NavigationButton>
      ))}
    </NavigationContainer>
  );
};

export default GalleryNavigation;