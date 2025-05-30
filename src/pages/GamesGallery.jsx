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
    color: #2E7D32; /* Verde médio escuro - mesma cor do botão Games */
  }
`;

const GalleryDescription = styled.p`
  max-width: 700px;
  margin: 0 auto;
  color: ${theme.colors.text.secondary};
`;



const GamesGallery = () => {
  // Dados simulados para a galeria de games
  const gamesImages = [
    {
      id: 1,
      title: 'Torneio de Card Games',
      description: 'Competição oficial de card games com premiação',
      src: 'https://assetsio.gnwcdn.com/yu-gi-oh-tcg-hand-place-card.jpeg?width=690&quality=70&format=jpg&dpr=2&auto=webp',
      tag: 'Torneio'
    },
    {
      id: 2,
      title: 'Arena de eSports',
      description: 'Competições de jogos eletrônicos com equipes profissionais',
      src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070',
      tag: 'eSports'
    },
    {
      id: 3,
      title: 'Área Retrô',
      description: 'Jogos clássicos e consoles antigos para nostalgia',
      src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070',
      tag: 'Retrô'
    },
    {
      id: 4,
      title: 'Realidade Virtual',
      description: 'Experiências imersivas com os mais recentes jogos de VR',
      src: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1974',
      tag: 'VR'
    },
    {
      id: 5,
      title: 'Jogos de Tabuleiro',
      description: 'Área dedicada a board games e RPGs de mesa',
      src: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=2071',
      tag: 'Tabuleiro'
    },
    {
      id: 6,
      title: 'Lançamentos de Games',
      description: 'Demonstrações dos jogos mais aguardados do ano',
      src: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070',
      tag: 'Lançamentos'
    },
     {
      id: 7,
      title: 'Área Free-to-Play',
      description: 'Estações de jogo livres para todos os visitantes',
      src: 'https://images.unsplash.com/photo-1580327344181-c1163234e5a0?q=80&w=2067',
      tag: 'Free Play'
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
            Galeria de <span>Games</span>
          </GalleryTitle>
          <GalleryDescription>
            Confira as áreas de jogos e competições das edições anteriores do ANIMECOSP.
            De jogos retrô a realidade virtual, card games a eSports, temos diversão para todos os gostos!
          </GalleryDescription>
        </GalleryHeader>
        
        <GalleryNavigation currentPath="/gallery/games" />
        
        <GalleryComponent images={gamesImages} categoryColor="#2E7D32" />
      </motion.div>
    </GalleryContainer>
  );
};

export default GamesGallery;