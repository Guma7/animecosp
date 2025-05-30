import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GalleryComponent from '../components/Gallery';
import theme from '../styles/theme';
import { motion } from 'framer-motion';

const GalleryContainer = styled.div`
  min-height: 100vh;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const GalleryHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
`;

const GalleryTitle = styled.h1`
  margin-bottom: ${theme.spacing.md};
  font-family: ${theme.fonts.heading};
  
  span {
    color: ${theme.colors.accent};
  }
`;

const GalleryDescription = styled.p`
  max-width: 700px;
  margin: 0 auto;
  color: ${theme.colors.text.secondary};
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
`;

const FilterButton = styled(motion.button)`
  background: ${props => props.active ? theme.colors.accent : 'transparent'};
  color: ${props => props.active ? theme.colors.background.paper : theme.colors.text.primary};
  border: 1px solid ${props => props.active ? theme.colors.accent : 'rgba(255, 255, 255, 0.1)'};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.small};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background: ${props => props.active ? theme.colors.accent : 'rgba(255, 255, 255, 0.05)'};
    transform: translateY(-2px);
  }
`;

const Gallery = () => {
  // Dados simulados para a galeria
  const galleryImages = [
    {
      id: 1,
      title: 'Concurso de Cosplay 2025',
      description: 'Melhores momentos do concurso de cosplay da edição anterior',
      src: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?q=80&w=2080',
      tag: 'Cosplay'
    },
    {
      id: 2,
      title: 'Painel de Dubladores',
      description: 'Encontro com os dubladores dos seus personagens favoritos',
      src: 'https://p2.trrsf.com/image/fget/cf/2000/0/images.terra.com/2014/07/15/10dubladoresespecialcecilia-lemesrep.jpg',
      tag: 'Painéis'
    },
    {
      id: 3,
      title: 'Torneio de Card Games',
      description: 'Competição oficial de card games com premiação',
      src: 'https://assetsio.gnwcdn.com/yu-gi-oh-tcg-hand-place-card.jpeg?width=690&quality=70&format=jpg&dpr=2&auto=webp',
      tag: 'Games'
    },
    {
      id: 8,
      title: 'Arena de eSports',
      description: 'Competições de jogos eletrônicos com equipes profissionais',
      src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070',
      tag: 'Games'
    },
    {
      id: 4,
      title: 'Exposição de Ilustrações',
      description: 'Obras de artistas talentosos inspiradas em animes e mangás',
      src: 'https://blog.useartools.com.br/wp-content/uploads/2023/05/ilustracao-dos-personagens-leonardo-e-michelangelo-do-anime-tartarugas-ninja-em-papel-com-canetas-artools-ao-seu-redor.jpg',
      tag: 'Arte'
    },
    {
      id: 5,
      title: 'Workshop de Desenho Mangá',
      description: 'Aprenda técnicas básicas de desenho no estilo mangá',
      src: 'https://www.mrl.nsw.gov.au/images/UserUploadedImages/132/Manga_webevent.jpg',
      tag: 'Workshop'
    },
    {
      id: 6,
      title: 'Workshop de Cosplay',
      description: 'Técnicas de confecção de trajes e acessórios',
      src: 'https://www.kamuicosplay.com/wp-content/uploads/2024/01/Workshop-by-Kamui-Cosplay.jpg',
      tag: 'Workshop'
    },
    {
      id: 7,
      title: 'Painel de Mangakas',
      description: 'Criadores de mangá compartilham suas experiências',
      src: 'https://vivasaudedigital.com.br/wp-content/uploads/2022/07/yu-gi-oh.jpg',
      tag: 'Painéis'
    },
    {
      id: 9,
      title: 'Cosplay de Filmes e Séries',
      description: 'Personagens famosos do cinema e TV',
      src: 'https://lh3.googleusercontent.com/-8d1d54MyKcM/WHKhLpC5buI/AAAAAAAACbI/UCF0M6FucjcsUhQcSv8uuQYNMD-jLlhXQCHMYBhgL/s1280/anime_friends_2015_627_20150714_1605020268.jpg',
      tag: 'Cinema'
    }
  ];

  return (
    <GalleryContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GalleryHeader>
          <GalleryTitle>
            Atrações <span>2025</span>
          </GalleryTitle>
          <GalleryDescription>
            Confira as atrações desta edição no ANIMECOSP.
          </GalleryDescription>
        </GalleryHeader>
        
        <FilterContainer>
          <FilterButton 
            as={Link} 
            to="/gallery/cosplay" 
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Cosplay
          </FilterButton>
          <FilterButton 
            as={Link} 
            to="/gallery/paineis" 
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Painéis
          </FilterButton>
          <FilterButton 
            as={Link} 
            to="/gallery/games" 
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Games
          </FilterButton>
          <FilterButton 
            as={Link} 
            to="/gallery/art" 
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Arte
          </FilterButton>
          <FilterButton 
            as={Link} 
            to="/gallery/workshops" 
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Workshops
          </FilterButton>
        </FilterContainer>
        
        <GalleryComponent 
          images={galleryImages} 
          categoryColorMap={{
            'Cosplay': '#C41230', // Vermelho para Cosplay
            'Painéis': '#6A0DAD', // Roxo mais escuro e menos azulado para Painéis
            'Games': '#2E7D32', // Verde para Games
            'Arte': '#0277BD', // Azul para Arte
            'Workshop': theme.colors.dark, // Azul escuro para Workshop
            'Cinema': '#C41230' // Vermelho para Cinema (mesma cor de Cosplay)
          }} 
        />
      </motion.div>
    </GalleryContainer>
  );
};

export default Gallery;