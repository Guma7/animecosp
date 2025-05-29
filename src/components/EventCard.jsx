import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../styles/theme';

const Card = styled(motion.div)`
  background: ${theme.colors.background.paper};
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${theme.shadows.medium};
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: 4px solid ${props => props.accentColor || theme.colors.primary};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.large};
  }
`;

const CardImage = styled.div`
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  }
`;

const CardCategory = styled.span`
  position: absolute;
  top: ${theme.spacing.md};
  right: ${theme.spacing.md};
  background: ${props => props.categoryColor || theme.colors.primary};
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.small};
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  z-index: 2;
  box-shadow: ${theme.shadows.small};
`;

const CardContent = styled.div`
  padding: ${theme.spacing.lg};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-weight: 700;
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.text.primary};
`;

const CardTime = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.accent};
  font-weight: 500;
  font-size: 0.9rem;
`;

const CardDescription = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 0.95rem;
  margin-bottom: ${theme.spacing.lg};
  flex: 1;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const CardLocation = styled.span`
  color: ${theme.colors.text.secondary};
  font-size: 0.85rem;
  display: flex;
  align-items: center;
`;

const CardButton = styled.button`
  background: transparent;
  color: ${theme.colors.highlight};
  border: 1px solid ${theme.colors.highlight};
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.small};
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.highlight};
    color: ${theme.colors.background.paper};
  }
`;

const EventCard = ({ 
  title, 
  time, 
  description, 
  location, 
  category, 
  image, 
  categoryColor,
  accentColor 
}) => {
  return (
    <Card 
      accentColor={accentColor}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CardImage image={image}>
        <CardCategory categoryColor={categoryColor}>{category}</CardCategory>
      </CardImage>
      
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardTime>{time}</CardTime>
        <CardDescription>{description}</CardDescription>
        
        <CardFooter>
          <CardLocation>{location}</CardLocation>
          <CardButton>Detalhes</CardButton>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default EventCard;