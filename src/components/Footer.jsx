import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaDiscord, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import theme from '../styles/theme';

const FooterContainer = styled.footer`
  background: ${theme.colors.background.alt};
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.xxl} 0;
  border-top: 4px solid ${theme.colors.primary};
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: ${props => props.horizontalOffset || '0'};
`;

const FooterLogo = styled(Link)`
  font-family: ${theme.fonts.special};
  font-size: 2rem;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.md};
  display: inline-block;
  
  span {
    color: ${theme.colors.accent};
  }
`;

const FooterText = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
  margin-bottom: ${theme.spacing.md};
  line-height: 1.6;
`;

const FooterTitle = styled.h4`
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  font-size: 1.2rem;
  position: relative;
  padding-bottom: ${theme.spacing.sm};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: ${theme.colors.primary};
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: ${theme.spacing.md};
`;

const StyledLink = styled(Link)`
  color: ${theme.colors.text.secondary};
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  
  &:hover {
    color: ${theme.colors.accent};
    transform: translateX(5px);
  }
  
  &::before {
    content: '>';
    margin-right: ${theme.spacing.xs};
    color: ${theme.colors.primary};
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

// Função para rolar para o topo da página
  const scrollToTop = () => {
    // Contador de tentativas para limitar o número de tentativas
    let attempts = 0;
    const maxAttempts = 10;

    // Função para forçar a rolagem para o topo usando diferentes métodos
    const forceScrollToTop = () => {
      if (attempts >= maxAttempts) return;
      attempts++;

      // Método 1: usando scrollTo com diferentes opções
      try {
        // Tenta com behavior: 'auto' (mais confiável)
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      } catch (e) {
        // Fallback para o método mais simples
        window.scrollTo(0, 0);
      }
      
      // Método 2: definindo scrollTop diretamente em diferentes elementos
      if (document.documentElement) {
        document.documentElement.scrollTop = 0; // Para navegadores modernos
      }
      if (document.body) {
        document.body.scrollTop = 0; // Para navegadores mais antigos
      }
      if (window.pageYOffset > 0) {
        // Se ainda não rolou para o topo, tenta novamente
        window.scrollTo(0, 0);
      }
    };

    // Executa imediatamente
    forceScrollToTop();

    // Executa em vários intervalos para garantir que a rolagem ocorra
    const scrollTimes = [0, 10, 30, 50, 100, 150, 200, 300, 400, 500];
    scrollTimes.forEach(time => {
      setTimeout(forceScrollToTop, time);
    });

    // Verifica se a página já está no topo, se não estiver, força a rolagem
    setTimeout(() => {
      if (window.pageYOffset > 0) {
        window.scrollTo(0, 0);
      }
    }, 600);
  };


const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};
`;

const SocialLink = styled.a`
  color: ${theme.colors.text.secondary};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.color || theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.text.secondary};
  
  svg {
    margin-right: ${theme.spacing.sm};
    color: ${theme.colors.primary};
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${theme.spacing.lg};
  padding-right: ${theme.spacing.lg};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
      <FooterColumn horizontalOffset="20px">
          <FooterLogo to="/" onClick={scrollToTop}>
            ANIME<span>COSP</span>
          </FooterLogo>
          <FooterText>
            O maior evento de anime e cultura geek do Brasil. Junte-se a nós para três dias de imersão total no universo dos animes, mangás, cosplays e muito mais.
          </FooterText>
          <SocialLinks>
            <SocialLink href="#" color="#3b5998">
              <FaFacebook />
            </SocialLink>
            <SocialLink href="#" color="#1da1f2">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="#" color="#e1306c">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="#" color="#ff0000">
              <FaYoutube />
            </SocialLink>
            <SocialLink href="#" color="#7289da">
              <FaDiscord />
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn horizontalOffset="119px">
          <FooterTitle>Links Rápidos</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <StyledLink to="/" onClick={scrollToTop}>Home</StyledLink>
            </FooterLink>
            <FooterLink>
              <StyledLink to="/schedule" onClick={scrollToTop}>Programação</StyledLink>
            </FooterLink>
            <FooterLink>
              <StyledLink to="/gallery" onClick={scrollToTop}>Atrações</StyledLink>
            </FooterLink>
            <FooterLink>
              <StyledLink to="/contact" onClick={scrollToTop}>Contato</StyledLink>
            </FooterLink>
            <FooterLink>
              <StyledLink to="/tickets" onClick={scrollToTop}>Garanta o seu Ingresso</StyledLink>
            </FooterLink>
            <FooterLink>
              <StyledLink to="/faq" onClick={scrollToTop}>FAQ</StyledLink>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        
        
        <FooterColumn horizontalOffset="59px">
          <FooterTitle>Contato</FooterTitle>
          <ContactItem>
            <FaMapMarkerAlt />
            <span>Expo Center Norte, São Paulo - SP</span>
          </ContactItem>
          <ContactItem>
            <FaEnvelope />
            <span>contato@animecosp.com.br</span>
          </ContactItem>
          <ContactItem>
            <FaPhone />
            <span>+55 (11) 99999-9999</span>
          </ContactItem>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} AnimeCosp. Todos os direitos reservados.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;