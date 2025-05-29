import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaCommentAlt } from 'react-icons/fa';
import theme from '../styles/theme';

const FormContainer = styled(motion.div)`
  background: ${theme.colors.background.paper};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.medium};
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  border-top: 4px solid ${theme.colors.primary};
`;

const FormTitle = styled.h3`
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
  font-family: ${theme.fonts.heading};
  font-size: 1.8rem;
  
  span {
    color: ${theme.colors.primary};
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.lg};
  position: relative;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${theme.spacing.md};
  padding-left: 2.5rem;
  background: ${theme.colors.background.alt};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.small};
  color: ${theme.colors.text.primary};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(255, 23, 68, 0.2);
  }
  
  &::placeholder {
    color: ${theme.colors.text.disabled};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing.md};
  padding-left: 2.5rem;
  background: ${theme.colors.background.alt};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.small};
  color: ${theme.colors.text.primary};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(255, 23, 68, 0.2);
  }
  
  &::placeholder {
    color: ${theme.colors.text.disabled};
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: ${theme.spacing.md};
  background: ${theme.colors.gradients.button};
  color: ${theme.colors.text.primary};
  border: none;
  border-radius: ${theme.borderRadius.small};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  
  svg {
    margin-right: ${theme.spacing.sm};
  }
  
  &:hover {
    box-shadow: ${theme.shadows.medium};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 2.4rem;
  color: ${theme.colors.primary};
  font-size: 1rem;
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  color: ${theme.colors.success};
  margin-top: ${theme.spacing.md};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.small};
  background: rgba(0, 200, 83, 0.1);
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulando envio para um backend
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <FormContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FormTitle>
        Entre em <span>Contato</span>
      </FormTitle>
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="name">Nome Completo</FormLabel>
          <InputIcon>
            <FaUser />
          </InputIcon>
          <FormInput
            type="text"
            id="name"
            name="name"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <InputIcon>
            <FaEnvelope />
          </InputIcon>
          <FormInput
            type="email"
            id="email"
            name="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="phone">Telefone</FormLabel>
          <InputIcon>
            <FaPhone />
          </InputIcon>
          <FormInput
            type="tel"
            id="phone"
            name="phone"
            placeholder="Seu telefone"
            value={formData.phone}
            onChange={handleChange}
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="message">Mensagem</FormLabel>
          <InputIcon>
            <FaCommentAlt />
          </InputIcon>
          <FormTextarea
            id="message"
            name="message"
            placeholder="Sua mensagem"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <SubmitButton
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaPaperPlane />
          {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
        </SubmitButton>
      </form>
      
      {isSubmitted && (
        <SuccessMessage
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </SuccessMessage>
      )}
    </FormContainer>
  );
};

export default ContactForm;