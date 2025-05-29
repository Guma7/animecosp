import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import theme from '../styles/theme';

const HeroContainer = styled.div`
  height: 90vh;
  width: 100%;
  background: ${theme.colors.gradients.hero};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 0 ${theme.spacing.md};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/src/assets/images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.2;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, ${theme.colors.background.main}, transparent);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  z-index: 2;
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-family: ${theme.fonts.special};
  font-size: 3.5rem;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  
  span {
    color: ${theme.colors.highlight};
    display: block;
    font-size: 5rem;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 2.5rem;
    
    span {
      font-size: 3.5rem;
    }
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.text.primary};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const Date = styled(motion.div)`
  font-family: ${theme.fonts.heading};
  font-weight: 700;
  font-size: 1.5rem;
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.lg};
  text-shadow: 0 0 5px ${theme.colors.accent}, 0 0 10px ${theme.colors.accent};
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.2rem;
  }
`;

const Button = styled(motion.button)`
  background: ${theme.colors.gradients.button};
  color: ${theme.colors.text.primary};
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: ${theme.borderRadius.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  outline: none;
  box-shadow: ${theme.shadows.medium};
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${theme.shadows.large};
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  background-color: ${props => props.color || theme.colors.primary};
  opacity: 0.1;
  border-radius: 50%;
  filter: blur(5px);
`;

const Hero = () => {
  const navigate = useNavigate();

  const handleTicketClick = () => {
    navigate('/tickets');
  };

  return (
    <HeroContainer>
      <FloatingElements>
        {/* Elementos flutuantes decorativos */}
        <FloatingElement
          color={theme.colors.primary}
          style={{ top: '10%', left: '10%', width: '100px', height: '100px' }}
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
        />
        <FloatingElement
          color={theme.colors.secondary}
          style={{ top: '50%', right: '10%', width: '150px', height: '150px' }}
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ repeat: Infinity, duration: 25, ease: 'easeInOut' }}
        />
        <FloatingElement
          color={theme.colors.accent}
          style={{ bottom: '20%', left: '20%', width: '120px', height: '120px' }}
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ repeat: Infinity, duration: 22, ease: 'easeInOut' }}
        />
      </FloatingElements>
      
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ANIME<span>COSP 2025</span>
        </Title>
        
        <Date
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          15-17 DE JULHO • SÃO PAULO
        </Date>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          O maior evento de anime e cultura geek do Brasil! Três dias de imersão total no universo dos animes, mangás, cosplays e muito mais.
        </Subtitle>
        
        <Button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleTicketClick}
        >
          Garanta seu ingresso
        </Button>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;