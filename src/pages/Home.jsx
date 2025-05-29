import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import theme from '../styles/theme';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const EventsSection = styled.section`
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  font-family: ${theme.fonts.heading};
  position: relative;
  display: inline-block;
  padding-bottom: ${theme.spacing.sm};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.small};
  }
`;

const SectionDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${theme.spacing.xl};
  color: ${theme.colors.text.secondary};
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

const Home = () => {
  // Dados das atrações da galeria para exibir na Home
  const events = [
    {
      id: 1,
      title: 'Concurso de Cosplay 2025',
      time: 'Sábado, 15 de Julho • 14:00',
      description: 'Melhores momentos do concurso de cosplay da edição anterior',
      location: 'Palco Principal',
      category: 'Cosplay',
      image: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?q=80&w=2080',
      categoryColor: theme.colors.primary,
      accentColor: theme.colors.primary
    },
    {
      id: 2,
      title: 'Painel de Dubladores',
      time: 'Sábado, 15 de Julho • 16:30',
      description: 'Encontro com os dubladores dos seus personagens favoritos',
      location: 'Auditório 2',
      category: 'Painéis',
      image: 'https://p2.trrsf.com/image/fget/cf/2000/0/images.terra.com/2014/07/15/10dubladoresespecialcecilia-lemesrep.jpg',
      categoryColor: theme.colors.secondary,
      accentColor: theme.colors.secondary
    },
    {
      id: 3,
      title: 'Torneio de Card Games',
      time: 'Domingo, 16 de Julho • 10:00',
      description: 'Competição oficial de card games com premiação',
      location: 'Área de Games',
      category: 'Games',
      image: 'https://assetsio.gnwcdn.com/yu-gi-oh-tcg-hand-place-card.jpeg?width=690&quality=70&format=jpg&dpr=2&auto=webp',
      categoryColor: theme.colors.accent,
      accentColor: theme.colors.accent
    },
    {
      id: 4,
      title: 'Arena de eSports',
      time: 'Domingo, 16 de Julho • 13:00',
      description: 'Competições de jogos eletrônicos com equipes profissionais',
      location: 'Arena de Games',
      category: 'Games',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070',
      categoryColor: theme.colors.highlight,
      accentColor: theme.colors.highlight
    },
    {
      id: 5,
      title: 'Exposição de Ilustrações',
      time: 'Sábado, 15 de Julho • 11:00',
      description: 'Obras de artistas talentosos inspiradas em animes e mangás',
      location: 'Galeria de Arte',
      category: 'Arte',
      image: 'https://blog.useartools.com.br/wp-content/uploads/2023/05/ilustracao-dos-personagens-leonardo-e-michelangelo-do-anime-tartarugas-ninja-em-papel-com-canetas-artools-ao-seu-redor.jpg',
      categoryColor: theme.colors.primary,
      accentColor: theme.colors.primary
    },
    {
      id: 6,
      title: 'Workshop de Desenho Mangá',
      time: 'Domingo, 16 de Julho • 15:30',
      description: 'Aprenda técnicas básicas de desenho no estilo mangá',
      location: 'Sala de Workshops',
      category: 'Workshop',
      image: 'https://www.mrl.nsw.gov.au/images/UserUploadedImages/132/Manga_webevent.jpg',
      categoryColor: theme.colors.secondary,
      accentColor: theme.colors.secondary
    },
    {
      id: 7,
      title: 'Workshop de Cosplay',
      time: 'Sábado, 15 de Julho • 10:00',
      description: 'Técnicas de confecção de trajes e acessórios',
      location: 'Sala de Workshops',
      category: 'Workshop',
      image: 'https://www.kamuicosplay.com/wp-content/uploads/2024/01/Workshop-by-Kamui-Cosplay.jpg',
      categoryColor: theme.colors.accent,
      accentColor: theme.colors.accent
    },
    {
      id: 8,
      title: 'Painel de Mangakas',
      time: 'Domingo, 16 de Julho • 11:30',
      description: 'Criadores de mangá compartilham suas experiências',
      location: 'Auditório 1',
      category: 'Painéis',
      image: 'https://vivasaudedigital.com.br/wp-content/uploads/2022/07/yu-gi-oh.jpg',
      categoryColor: theme.colors.highlight,
      accentColor: theme.colors.highlight
    },
    {
      id: 9,
      title: 'Cosplay de Filmes e Séries',
      time: 'Sábado, 15 de Julho • 17:00',
      description: 'Personagens famosos do cinema e TV',
      location: 'Palco Principal',
      category: 'Cinema',
      image: 'https://lh3.googleusercontent.com/-8d1d54MyKcM/WHKhLpC5buI/AAAAAAAACbI/UCF0M6FucjcsUhQcSv8uuQYNMD-jLlhXQCHMYBhgL/s1280/anime_friends_2015_627_20150714_1605020268.jpg',
      categoryColor: theme.colors.primary,
      accentColor: theme.colors.primary
    },
  ];

  return (
    <HomeContainer>
      <Hero />
      
      <EventsSection>
        <TitleContainer>
          <SectionTitle>Atrações 2025</SectionTitle>
          <SectionDescription>
            Não perca nenhuma atividade e planeje sua visita!
          </SectionDescription>
        </TitleContainer>
        
        <EventsGrid>
          {events.map(event => (
            <EventCard 
              key={event.id}
              title={event.title}
              time={event.time}
              description={event.description}
              location={event.location}
              category={event.category}
              image={event.image}
              categoryColor={event.categoryColor}
              accentColor={event.accentColor}
            />
          ))}
        </EventsGrid>
      </EventsSection>
    </HomeContainer>
  );
};

export default Home;