import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../styles/theme';
import GalleryComponent from '../components/Gallery';
import GalleryNavigation from '../components/GalleryNavigation';

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



const ArtGallery = () => {
  // Dados simulados para a galeria de arte
  const artImages = [
    {
      id: 1,
      title: 'Exposição de Ilustrações',
      description: 'Obras de artistas talentosos inspiradas em animes e mangás',
      src: 'https://blog.useartools.com.br/wp-content/uploads/2023/05/ilustracao-dos-personagens-leonardo-e-michelangelo-do-anime-tartarugas-ninja-em-papel-com-canetas-artools-ao-seu-redor.jpg',
      tag: 'Ilustração'
    },
    {
      id: 5,
      title: 'Fan Art',
      description: 'Criações de fãs homenageando suas séries favoritas',
      src: 'https://leestoretech.com/wp-content/uploads/2024/11/goku-768x512.webp',
      tag: 'Fan Art'
    },
    {
      id: 6,
      title: 'Concept Art',
      description: 'Arte conceitual de jogos e animações',
      src: 'https://cdn.mos.cms.futurecdn.net/ew7hxbJKwPewaRmjYW79bi-1638-80.jpg.webp',
      tag: 'Concept'
    },
    {
      id: 8,
      title: 'Arte em Tempo Real',
      description: 'Artistas criando obras ao vivo durante o evento',
      src: 'https://images.unsplash.com/photo-1596727147705-61a532a659bd?q=80&w=1974',
      tag: 'Live Art'
    },
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
            Galeria de <span>Arte</span>
          </GalleryTitle>
          <GalleryDescription>
            Confira as exposições artísticas das edições anteriores do ANIMECOSP.
            Celebramos a criatividade e talento de artistas que dão vida ao universo geek através de diferentes técnicas e estilos.
          </GalleryDescription>
        </GalleryHeader>
        
        <GalleryNavigation currentPath="/gallery/art" />
        
        <GalleryComponent images={artImages} categoryColor="#0277BD" />
      </motion.div>
    </GalleryContainer>
  );
};

export default ArtGallery;