import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import theme from '../styles/theme';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaDiscord } from 'react-icons/fa';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
`;

const ContactTitle = styled.h1`
  margin-bottom: ${theme.spacing.md};
  font-family: ${theme.fonts.heading};
  
  span {
    color: ${theme.colors.primary};
  }
`;

const ContactDescription = styled.p`
  max-width: 700px;
  margin: 0 auto;
  color: ${theme.colors.text.secondary};
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div`
  background: ${theme.colors.background.paper};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.medium};
  border-top: 4px solid ${theme.colors.secondary};
`;

const InfoTitle = styled.h3`
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.text.primary};
  font-family: ${theme.fonts.heading};
  
  span {
    color: ${theme.colors.secondary};
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.lg};
`;

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${theme.colors.background.alt};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${theme.spacing.md};
  color: ${theme.colors.secondary};
  font-size: 1.2rem;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.h4`
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.text.primary};
`;

const InfoText = styled.p`
  color: ${theme.colors.text.secondary};
  margin-bottom: 0;
`;

const MapContainer = styled.div`
  margin-top: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  height: 250px;
  background: ${theme.colors.background.alt};
  position: relative;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  
  &::before {
    content: 'Mapa carregando...';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${theme.colors.text.secondary};
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactHeader>
        <ContactTitle>
          Entre em <span>Contato</span>
        </ContactTitle>
        <ContactDescription>
          Tem alguma dúvida sobre o evento? Quer ser um expositor ou patrocinador? 
          Entre em contato conosco e teremos prazer em ajudar!
        </ContactDescription>
      </ContactHeader>
      
      <ContactContent>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ContactInfo>
            <InfoTitle>
              Informações de <span>Contato</span>
            </InfoTitle>
            
            <InfoItem>
              <InfoIcon>
                <FaMapMarkerAlt />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Localização</InfoLabel>
                <InfoText>Centro de Convenções de São Paulo, Av. Paulista, 1000 - São Paulo, SP</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FaEnvelope />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>E-mail</InfoLabel>
                <InfoText>contato@animecosp.com.br</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FaPhone />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Telefone</InfoLabel>
                <InfoText>(11) 99999-9999</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FaDiscord />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Discord</InfoLabel>
                <InfoText>discord.gg/animecosp</InfoText>
              </InfoContent>
            </InfoItem>
            
            <MapContainer>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951624297!2d-46.65390548502406!3d-23.563273284682785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1625097693017!5m2!1spt-BR!2sbr" 
                allowFullScreen="" 
                loading="lazy"
                title="Localização do Evento"
              ></iframe>
            </MapContainer>
          </ContactInfo>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ContactForm />
        </motion.div>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;