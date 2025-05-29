import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../styles/theme';
import { FaClock, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const ScheduleContainer = styled.div`
  min-height: 100vh;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const ScheduleHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
`;

const ScheduleTitle = styled.h1`
  margin-bottom: ${theme.spacing.md};
  font-family: ${theme.fonts.heading};
  
  span {
    color: ${theme.colors.highlight};
  }
`;

const ScheduleDescription = styled.p`
  max-width: 700px;
  margin: 0 auto;
  color: ${theme.colors.text.secondary};
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${theme.spacing.xl};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Tab = styled.button`
  background: transparent;
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  color: ${props => props.active ? theme.colors.highlight : theme.colors.text.secondary};
  font-weight: ${props => props.active ? '600' : '400'};
  font-size: 1.1rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${theme.colors.highlight};
    transform: scaleX(${props => props.active ? 1 : 0});
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: ${theme.colors.highlight};
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`;

const ScheduleGrid = styled.div`
  display: grid;
  gap: ${theme.spacing.md};
`;

const ScheduleItem = styled(motion.div)`
  background: ${theme.colors.background.paper};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.lg};
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: ${theme.spacing.md};
  border-left: 4px solid ${props => props.accentColor || theme.colors.primary};
  box-shadow: ${theme.shadows.medium};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const TimeBlock = styled.div`
  text-align: center;
  padding: ${theme.spacing.sm};
  background: ${theme.colors.background.alt};
  border-radius: ${theme.borderRadius.small};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing.sm};
  }
`;

const Time = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${theme.colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.xs};
  
  svg {
    margin-right: ${theme.spacing.xs};
    color: ${theme.colors.highlight};
  }
`;

const Duration = styled.div`
  font-size: 0.8rem;
  color: ${theme.colors.text.secondary};
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.h3`
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.text.primary};
  font-weight: 600;
`;

const ItemDescription = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
  margin-bottom: ${theme.spacing.sm};
`;

const ItemMeta = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.text.secondary};
  font-size: 0.85rem;
  
  svg {
    margin-right: ${theme.spacing.xs};
    color: ${props => props.color || theme.colors.primary};
  }
  
  span {
    margin-right: ${theme.spacing.md};
    display: flex;
    align-items: center;
  }
`;

const ActionBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: flex-start;
    margin-top: ${theme.spacing.sm};
  }
`;

const FavoriteButton = styled.button`
  background: transparent;
  border: 1px solid ${props => props.isFavorite ? theme.colors.highlight : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.isFavorite ? theme.colors.highlight : theme.colors.text.secondary};
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: scale(1.1);
  }
  
  svg {
    font-size: 1rem;
  }
`;

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('day1');
  const [favorites, setFavorites] = useState([]);
  
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(item => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  
  // Dados simulados para a programação
  const scheduleData = {
    day1: [
      {
        id: 1,
        time: '10:00',
        duration: '1h30min',
        title: 'Cerimônia de Abertura',
        description: 'Cerimônia oficial de abertura do ANIMECOSP 2025 com apresentações especiais.',
        location: 'Palco Principal',
        speaker: 'Equipe ANIMECOSP',
        accentColor: theme.colors.primary
      },
      {
        id: 2,
        time: '12:00',
        duration: '1h',
        title: 'Painel: O Futuro dos Animes',
        description: 'Discussão sobre as tendências e o futuro da indústria de animes com especialistas.',
        location: 'Auditório 1',
        speaker: 'Carlos Silva, Ana Tanaka',
        accentColor: theme.colors.secondary
      },
      {
        id: 3,
        time: '14:00',
        duration: '2h',
        title: 'Concurso de Cosplay - Categoria Iniciante',
        description: 'Competição de cosplay para participantes iniciantes com premiação especial.',
        location: 'Palco Principal',
        speaker: 'Júri Especializado',
        accentColor: theme.colors.highlight
      },
      {
        id: 4,
        time: '16:30',
        duration: '1h30min',
        title: 'Workshop de Desenho Mangá',
        description: 'Aprenda técnicas básicas de desenho no estilo mangá com artistas profissionais.',
        location: 'Sala de Workshops',
        speaker: 'Marcos Takahashi',
        accentColor: theme.colors.accent
      },
      {
        id: 5,
        time: '18:30',
        duration: '2h',
        title: 'Exibição de Anime: Lançamentos 2025',
        description: 'Exibição dos episódios mais recentes dos animes mais aguardados de 2025.',
        location: 'Sala de Cinema',
        speaker: '',
        accentColor: theme.colors.dark
      },
    ],
    day2: [
      {
        id: 6,
        time: '10:00',
        duration: '1h',
        title: 'Painel: Dublagem em Animes',
        description: 'Conheça o processo de dublagem e os desafios enfrentados pelos dubladores.',
        location: 'Auditório 2',
        speaker: 'Equipe de Dubladores',
        accentColor: theme.colors.secondary
      },
      {
        id: 7,
        time: '12:00',
        duration: '2h',
        title: 'Torneio de Card Games',
        description: 'Competição oficial de card games com regras oficiais e premiação.',
        location: 'Área de Games',
        speaker: 'Árbitros Oficiais',
        accentColor: theme.colors.highlight
      },
      {
        id: 8,
        time: '14:30',
        duration: '1h30min',
        title: 'Meet & Greet: Convidados Especiais',
        description: 'Encontro com convidados especiais para fotos e autógrafos.',
        location: 'Área VIP',
        speaker: 'Convidados Internacionais',
        accentColor: theme.colors.primary
      },
      {
        id: 9,
        time: '16:30',
        duration: '2h',
        title: 'Concurso de Cosplay - Categoria Avançado',
        description: 'Competição de cosplay para participantes experientes com premiação especial.',
        location: 'Palco Principal',
        speaker: 'Júri Especializado',
        accentColor: theme.colors.highlight
      },
      {
        id: 10,
        time: '19:00',
        duration: '3h',
        title: 'Show J-Pop & K-Pop',
        description: 'Apresentação musical com os maiores sucessos do J-Pop e K-Pop.',
        location: 'Palco Principal',
        speaker: 'Bandas Convidadas',
        accentColor: theme.colors.accent
      },
    ],
    day3: [
      {
        id: 11,
        time: '10:00',
        duration: '1h30min',
        title: 'Painel: Criação de Personagens',
        description: 'Aprenda a criar personagens memoráveis para histórias e jogos.',
        location: 'Sala de Workshops',
        speaker: 'Artistas Convidados',
        accentColor: theme.colors.accent
      },
      {
        id: 12,
        time: '12:00',
        duration: '2h',
        title: 'Quiz Anime: Teste seus Conhecimentos',
        description: 'Competição de perguntas e respostas sobre o universo dos animes.',
        location: 'Auditório 1',
        speaker: 'Apresentador Especial',
        accentColor: theme.colors.secondary
      },
      {
        id: 13,
        time: '14:30',
        duration: '1h30min',
        title: 'Painel: Indústria de Games no Japão',
        description: 'Discussão sobre o mercado de games japonês e suas influências globais.',
        location: 'Auditório 2',
        speaker: 'Especialistas do Setor',
        accentColor: theme.colors.dark
      },
      {
        id: 14,
        time: '16:30',
        duration: '1h',
        title: 'Encerramento e Premiações',
        description: 'Cerimônia de encerramento com premiação dos concursos e sorteios.',
        location: 'Palco Principal',
        speaker: 'Equipe ANIMECOSP',
        accentColor: theme.colors.primary
      },
    ]
  };

  return (
    <ScheduleContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ScheduleHeader>
          <ScheduleTitle>
            <span>Programação</span> Completa
          </ScheduleTitle>
          <ScheduleDescription>
            Confira todos os painéis, workshops, competições e atrações do ANIMECOSP 2025.
            Planeje sua visita e não perca nenhuma atividade!
          </ScheduleDescription>
        </ScheduleHeader>
        
        <TabsContainer>
          <Tab 
            active={activeDay === 'day1'} 
            onClick={() => setActiveDay('day1')}
          >
            Dia 1 (15/07)
          </Tab>
          <Tab 
            active={activeDay === 'day2'} 
            onClick={() => setActiveDay('day2')}
          >
            Dia 2 (16/07)
          </Tab>
          <Tab 
            active={activeDay === 'day3'} 
            onClick={() => setActiveDay('day3')}
          >
            Dia 3 (17/07)
          </Tab>
        </TabsContainer>
        
        <ScheduleGrid>
          {scheduleData[activeDay].map((item, index) => (
            <ScheduleItem 
              key={item.id}
              accentColor={item.accentColor}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <TimeBlock>
                <Time>
                  <FaClock />
                  {item.time}
                </Time>
                <Duration>{item.duration}</Duration>
              </TimeBlock>
              
              <ContentBlock>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
                <ItemMeta>
                  {item.location && (
                    <span>
                      <FaMapMarkerAlt />
                      {item.location}
                    </span>
                  )}
                  {item.speaker && (
                    <span>{item.speaker}</span>
                  )}
                </ItemMeta>
              </ContentBlock>
              
              <ActionBlock>
                <FavoriteButton 
                  isFavorite={favorites.includes(item.id)}
                  onClick={() => toggleFavorite(item.id)}
                  aria-label={favorites.includes(item.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                >
                  <FaStar />
                </FavoriteButton>
              </ActionBlock>
            </ScheduleItem>
          ))}
        </ScheduleGrid>
      </motion.div>
    </ScheduleContainer>
  );
};

export default Schedule;