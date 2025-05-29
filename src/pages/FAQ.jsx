import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../styles/theme';
import { FaChevronDown, FaChevronUp, FaTicketAlt, FaMapMarkerAlt, FaClock, FaUserAlt, FaTshirt, FaCamera, FaUtensils, FaWifi } from 'react-icons/fa';

const FAQContainer = styled.div`
  min-height: 100vh;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const FAQHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
`;

const FAQTitle = styled.h1`
  margin-bottom: ${theme.spacing.md};
  font-family: ${theme.fonts.heading};
  
  span {
    color: ${theme.colors.primary};
  }
`;

const FAQDescription = styled.p`
  max-width: 700px;
  margin: 0 auto;
  color: ${theme.colors.text.secondary};
`;

const FAQContent = styled.div`
  display: grid;
  gap: ${theme.spacing.xl};
`;

const FAQCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
`;

const CategoryButton = styled.button`
  background: ${props => props.active ? theme.colors.primary : theme.colors.background.paper};
  color: ${props => props.active ? theme.colors.text.primary : theme.colors.text.secondary};
  border: 1px solid ${props => props.active ? theme.colors.primary : 'rgba(255, 255, 255, 0.1)'};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: ${theme.spacing.sm};
  }
  
  &:hover {
    background: ${props => props.active ? theme.colors.primary : 'rgba(255, 255, 255, 0.05)'};
    transform: translateY(-2px);
  }
`;

const FAQList = styled.div`
  display: grid;
  gap: ${theme.spacing.md};
`;

const FAQItem = styled(motion.div)`
  background: ${theme.colors.background.paper};
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${theme.shadows.medium};
  border-left: 4px solid ${theme.colors.primary};
`;

const FAQQuestion = styled.div`
  padding: ${theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }
`;

const QuestionText = styled.h3`
  font-size: 1.1rem;
  color: ${theme.colors.text.primary};
  font-weight: 500;
`;

const IconWrapper = styled.div`
  color: ${theme.colors.primary};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 ${theme.spacing.lg} ${theme.spacing.lg};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  font-size: 0.95rem;
`;

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState([]);
  
  const toggleItem = (id) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(item => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };
  
  const categories = [
    { id: 'all', name: 'Todos', icon: <FaChevronDown /> },
    { id: 'tickets', name: 'Ingressos', icon: <FaTicketAlt /> },
    { id: 'location', name: 'Local e Horários', icon: <FaMapMarkerAlt /> },
    { id: 'cosplay', name: 'Cosplay', icon: <FaTshirt /> },
    { id: 'activities', name: 'Atividades', icon: <FaCamera /> },
    { id: 'food', name: 'Alimentação', icon: <FaUtensils /> },
    { id: 'general', name: 'Geral', icon: <FaWifi /> },
  ];
  
  const faqItems = [
    {
      id: 1,
      category: 'tickets',
      question: 'Como comprar ingressos para o AnimeCosp?',
      answer: 'Os ingressos para o AnimeCosp podem ser adquiridos através do nosso site oficial na seção "Ingressos", ou em pontos de venda autorizados. Aceitamos pagamentos via cartão de crédito, débito, boleto bancário e PIX. Recomendamos a compra antecipada, pois os ingressos costumam esgotar rapidamente.'
    },
    {
      id: 2,
      category: 'tickets',
      question: 'Qual é a política de meia-entrada?',
      answer: 'Têm direito à meia-entrada: estudantes (com carteirinha válida), idosos acima de 60 anos, pessoas com deficiência e seu acompanhante, professores da rede pública e privada, e jovens de baixa renda. É necessário apresentar documento comprobatório na entrada do evento.'
    },
    {
      id: 3,
      category: 'tickets',
      question: 'Crianças pagam ingresso?',
      answer: 'Crianças até 7 anos não pagam ingresso, desde que acompanhadas por um adulto pagante. Crianças de 8 a 12 anos pagam meia-entrada. É necessário apresentar documento de identificação com foto ou certidão de nascimento.'
    },
    {
      id: 4,
      category: 'location',
      question: 'Onde será realizado o AnimeCosp?',
      answer: 'O AnimeCosp será realizado no Expo Center Norte, localizado na Av. Otto Baumgart, 1000 - Vila Guilherme, São Paulo - SP. O local é de fácil acesso por transporte público e possui estacionamento pago.'
    },
    {
      id: 5,
      category: 'location',
      question: 'Qual o horário de funcionamento do evento?',
      answer: 'O evento funciona das 10h às 22h na sexta-feira e sábado, e das 10h às 20h no domingo. Recomendamos chegar com antecedência, especialmente nos horários de maior movimento (entre 13h e 16h).'
    },
    {
      id: 6,
      category: 'cosplay',
      question: 'Posso ir fantasiado ao evento?',
      answer: 'Sim! Incentivamos o uso de cosplay durante todo o evento. Temos inclusive um concurso de cosplay com diversas categorias e premiações. Apenas lembramos que é proibido o porte de armas reais ou réplicas que possam ser confundidas com armas reais.'
    },
    {
      id: 7,
      category: 'cosplay',
      question: 'Como participar do concurso de cosplay?',
      answer: 'Para participar do concurso de cosplay, é necessário fazer inscrição prévia pelo site ou no local do evento (sujeito à disponibilidade de vagas). Há diferentes categorias como Individual, Grupos, Cosmaker e Performance. Consulte o regulamento completo na seção "Concurso de Cosplay" do nosso site.'
    },
    {
      id: 8,
      category: 'activities',
      question: 'Quais são as principais atrações do evento?',
      answer: 'O AnimeCosp conta com diversas atrações como: Artist Alley, feira de produtos, painéis com convidados nacionais e internacionais, workshops, área de jogos, concursos, exibição de animes, shows e muito mais. A programação completa está disponível na seção "Programação" do nosso site.'
    },
    {
      id: 9,
      category: 'activities',
      question: 'Como funciona o Meet & Greet com os convidados?',
      answer: 'Os Meet & Greets são sessões exclusivas com nossos convidados especiais. Para participar, é necessário adquirir um ingresso específico para cada sessão, além do ingresso do evento. As vagas são limitadas e as vendas são realizadas antecipadamente pelo site.'
    },
    {
      id: 10,
      category: 'food',
      question: 'Posso levar comida e bebida para o evento?',
      answer: 'É permitido levar água em garrafas plásticas transparentes e sem tampa, além de lanches leves para consumo pessoal. No entanto, o evento conta com uma praça de alimentação com diversas opções gastronômicas, incluindo comida japonesa, fast food e opções vegetarianas/veganas.'
    },
    {
      id: 11,
      category: 'food',
      question: 'Quais são as opções de alimentação disponíveis?',
      answer: 'O evento conta com uma praça de alimentação diversificada, com opções que vão desde culinária japonesa e coreana até fast food e doces temáticos. Também temos opções vegetarianas, veganas e sem glúten. Os preços variam entre R$15 e R$50 por refeição.'
    },
    {
      id: 12,
      category: 'general',
      question: 'O evento tem acessibilidade para pessoas com deficiência?',
      answer: 'Sim, o AnimeCosp é um evento inclusivo. Contamos com rampas de acesso, banheiros adaptados, intérpretes de libras nos principais painéis e uma equipe treinada para auxiliar pessoas com deficiência. Caso necessite de assistência especial, entre em contato conosco antecipadamente pelo e-mail acessibilidade@animecosp.com.br.'
    },
    {
      id: 13,
      category: 'general',
      question: 'Posso tirar fotos e gravar vídeos durante o evento?',
      answer: 'Sim, é permitido fotografar e filmar para uso pessoal, desde que não interfira no fluxo de pessoas ou nas atividades. O uso de tripés e equipamentos profissionais requer credenciamento prévio na área de imprensa. Alguns convidados podem ter restrições específicas para fotos e vídeos, que serão informadas durante os painéis.'
    },
    {
      id: 14,
      category: 'general',
      question: 'O evento tem Wi-Fi gratuito?',
      answer: 'Sim, oferecemos Wi-Fi gratuito em todas as áreas do evento. A senha será fornecida no local. No entanto, devido ao grande número de pessoas, a conexão pode ficar instável em horários de pico.'
    },
    {
      id: 15,
      category: 'general',
      question: 'Qual é a política de reembolso de ingressos?',
      answer: 'Em caso de cancelamento do evento, os ingressos serão reembolsados integralmente. Caso o participante não possa comparecer, aceitamos solicitações de reembolso até 15 dias antes do evento, com devolução de 70% do valor pago. Após esse prazo, não realizamos reembolsos, mas permitimos a transferência do ingresso para outra pessoa mediante comunicação prévia.'
    },
  ];
  
  const filteredFAQs = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);
  
  return (
    <FAQContainer>
      <FAQHeader>
        <FAQTitle>
          Perguntas <span>Frequentes</span>
        </FAQTitle>
        <FAQDescription>
          Encontre respostas para as dúvidas mais comuns sobre o AnimeCosp. Se não encontrar o que procura, entre em contato conosco.
        </FAQDescription>
      </FAQHeader>
      
      <FAQCategories>
        {categories.map(category => (
          <CategoryButton 
            key={category.id}
            active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.icon} {category.name}
          </CategoryButton>
        ))}
      </FAQCategories>
      
      <FAQContent>
        <FAQList>
          {filteredFAQs.map(item => (
            <FAQItem 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FAQQuestion onClick={() => toggleItem(item.id)}>
                <QuestionText>{item.question}</QuestionText>
                <IconWrapper isOpen={openItems.includes(item.id)}>
                  {openItems.includes(item.id) ? <FaChevronUp /> : <FaChevronDown />}
                </IconWrapper>
              </FAQQuestion>
              
              {openItems.includes(item.id) && (
                <FAQAnswer
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{item.answer}</p>
                </FAQAnswer>
              )}
            </FAQItem>
          ))}
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQ;