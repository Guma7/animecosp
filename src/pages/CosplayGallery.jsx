import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../styles/theme';
import GalleryComponent from '../components/Gallery';

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
    color: ${theme.colors.primary};
  }
`;

const GalleryDescription = styled.p`
  max-width: 700px;
  margin: 0 auto;
  color: ${theme.colors.text.secondary};
`;

const BackButton = styled(motion.button)`
  background: transparent;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.small};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  margin-bottom: ${theme.spacing.xl};
  display: flex;
  align-items: center;
  
  &:hover {
    background: rgba(255, 23, 68, 0.1);
    transform: translateX(-5px);
  }
  
  svg {
    margin-right: ${theme.spacing.xs};
  }
`;

const CosplayGallery = () => {
  // Dados simulados para a galeria de cosplay
  const cosplayImages = [
    {
      id: 1,
      title: 'Concurso de Cosplay 2025 - Categoria Avançado',
      description: 'Vencedores da categoria avançada do concurso de cosplay',
      src: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?q=80&w=2080',
      tag: 'Competição'
    },
    {
      id: 2,
      title: 'Cosplay de Personagens de Anime',
      description: 'Participantes com cosplays de personagens icônicos',
      src: 'https://diegomaryo.cdz.com.br/wp-content/uploads/2015/07/20150719_153520.jpg',
      tag: 'Anime'
    },
    {
      id: 3,
      title: 'Cosplay de Jogos',
      description: 'Cosplayers representando personagens de videogames',
      src: 'https://turntherightcorner.com/wp-content/uploads/2016/04/wondercon-cosplay-saturday-2016-213-street-fighter-group.jpg',
      tag: 'Games'
    },
    {
      id: 4,
      title: 'Cosplay de Filmes e Séries',
      description: 'Personagens famosos do cinema e TV',
      src: 'https://lh3.googleusercontent.com/-8d1d54MyKcM/WHKhLpC5buI/AAAAAAAACbI/UCF0M6FucjcsUhQcSv8uuQYNMD-jLlhXQCHMYBhgL/s1280/anime_friends_2015_627_20150714_1605020268.jpg',
      tag: 'Cinema'
    },
    {
      id: 6,
      title: 'Cosplay em Grupo',
      description: 'Grupos temáticos de cosplayers',
      src: 'https://preview.redd.it/cosplay-our-teen-titans-cosplay-group-the-judas-contract-v0-rmtgz0zbqesd1.jpg?width=1080&crop=smart&auto=webp&s=5ca0183f03a310d43d385ab81100b1b2ccec5987',
      tag: 'Grupo'
    },
    {
      id: 7,
      title: 'Cosplay de Mangá',
      description: 'Personagens de mangás populares',
      src: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1974',
      tag: 'Mangá'
    },
    {
      id: 8,
      title: 'Acessórios e Props',
      description: 'Detalhes incríveis em acessórios de cosplay',
      src: 'https://www.correiodopovo.com.br/image/contentid/policy:1.1271441:1678609800/image.JPG?f=2x1&q=0.9&w=768&$p$f$q$w=38e6134',
      tag: 'Props'
    },
    {
      id: 9,
      title: 'Maquiagem de Cosplay',
      description: 'A arte da caracterização em cosplay',
      src: 'https://trendyartideas.com/wp-content/uploads/2023/03/Mystique-from-X-Men-makeup.jpg.webp',
      tag: 'Maquiagem'
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
            Galeria de <span>Cosplay</span>
          </GalleryTitle>
          <GalleryDescription>
            Confira os melhores cosplays das edições anteriores do ANIMECOSP.
            De iniciantes a profissionais, celebramos a criatividade e dedicação de todos os cosplayers!
          </GalleryDescription>
        </GalleryHeader>
        
        <BackButton 
          as={motion.a} 
          href="/gallery"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Voltar para Galeria
        </BackButton>
        
        <GalleryComponent images={cosplayImages} />
      </motion.div>
    </GalleryContainer>
  );
};

export default CosplayGallery;