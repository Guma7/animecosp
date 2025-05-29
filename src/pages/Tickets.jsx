import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../styles/theme';
import { FaTicketAlt, FaRegSadTear, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';

const TicketsContainer = styled.div`
  min-height: 100vh;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const TicketsHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
`;

const TicketsTitle = styled.h1`
  margin-bottom: ${theme.spacing.md};
  font-family: ${theme.fonts.heading};
  
  span {
    color: ${theme.colors.primary};
  }
`;

const TicketsDescription = styled.p`
  max-width: 700px;
  margin: 0 auto;
  color: ${theme.colors.text.secondary};
`;

const TicketsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.xl};
`;

const SoldOutContainer = styled(motion.div)`
  background: ${theme.colors.background.paper};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.medium};
  max-width: 800px;
  width: 100%;
  text-align: center;
  border-top: 4px solid ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xl};
`;

const SoldOutIcon = styled.div`
  font-size: 5rem;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.lg};
  display: flex;
  justify-content: center;
`;

const SoldOutTitle = styled.h2`
  font-size: 2.5rem;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
  font-family: ${theme.fonts.heading};
`;

const SoldOutMessage = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 1.2rem;
  margin-bottom: ${theme.spacing.xl};
  line-height: 1.6;
`;

const NotificationContainer = styled(motion.div)`
  background: ${theme.colors.background.paper};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.medium};
  max-width: 800px;
  width: 100%;
  border-top: 4px solid ${theme.colors.secondary};
`;

const NotificationTitle = styled.h3`
  font-size: 1.5rem;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  
  svg {
    color: ${theme.colors.secondary};
  }
`;

const NotificationForm = styled.form`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const NotificationInput = styled.input`
  flex: 1;
  padding: ${theme.spacing.md};
  background: ${theme.colors.background.alt};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.small};
  color: ${theme.colors.text.primary};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.secondary};
  }
`;

const NotificationButton = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.colors.gradients.secondary};
  color: ${theme.colors.text.primary};
  border: none;
  border-radius: ${theme.borderRadius.small};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.medium};
  }
`;

const NextEventInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

const NextEventItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.text.secondary};
  
  svg {
    color: ${theme.colors.secondary};
  }
`;

const Tickets = () => {
  return (
    <TicketsContainer>
      <TicketsHeader>
        <TicketsTitle>
          <span>Ingressos</span> AnimeCosp
        </TicketsTitle>
        <TicketsDescription>
          Garanta sua participação no maior evento de anime e cultura geek do Brasil!
        </TicketsDescription>
      </TicketsHeader>
      
      <TicketsContent>
        <SoldOutContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SoldOutIcon>
            <FaRegSadTear />
          </SoldOutIcon>
          <SoldOutTitle>Ingressos Esgotados!</SoldOutTitle>
          <SoldOutMessage>
            Lamentamos informar que todos os ingressos para a edição atual do AnimeCosp foram vendidos. 
            Agradecemos pelo seu interesse e entusiasmo! Fique atento às nossas redes sociais para informações 
            sobre a próxima edição do evento.
          </SoldOutMessage>
          
          <NextEventInfo>
            <NextEventItem>
              <FaCalendarAlt />
              <span>Próxima edição: Julho de 2026</span>
            </NextEventItem>
            <NextEventItem>
              <FaTicketAlt />
              <span>Vendas a partir de: Março de 2026</span>
            </NextEventItem>
          </NextEventInfo>
        </SoldOutContainer>
        
        <NotificationContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <NotificationTitle>
            <FaEnvelope />
            Seja notificado quando novos ingressos estiverem disponíveis
          </NotificationTitle>
          <p>Cadastre seu e-mail para receber em primeira mão informações sobre a venda de ingressos para a próxima edição.</p>
          
          <NotificationForm>
            <NotificationInput 
              type="email" 
              placeholder="Seu melhor e-mail" 
              required 
            />
            <NotificationButton type="submit">
              <FaEnvelope />
              Cadastrar
            </NotificationButton>
          </NotificationForm>
        </NotificationContainer>
      </TicketsContent>
    </TicketsContainer>
  );
};

export default Tickets;