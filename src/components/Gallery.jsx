import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../styles/theme';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.lg} 0;
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${theme.shadows.medium};
  aspect-ratio: 1 / 1;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
  
  &:hover .gallery-info {
    opacity: 1;
    transform: translateY(0);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const GalleryInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${theme.spacing.md};
  color: ${theme.colors.text.primary};
  z-index: 2;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  &.gallery-info {
    opacity: 0;
  }
`;

const GalleryTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: ${theme.spacing.xs};
  font-weight: 600;
`;

const GalleryDescription = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.text.secondary};
`;

const GalleryTag = styled.span`
  position: absolute;
  top: ${theme.spacing.md};
  right: ${theme.spacing.md};
  background: ${theme.colors.primary};
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.small};
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
`;

const Gallery = ({ images }) => {
  // Fallback images if none provided
  const fallbackImages = [
    {
      id: 1,
      src: 'https://via.placeholder.com/400x400/FF1744/FFFFFF?text=Cosplay+Contest',
      title: 'Cosplay Contest',
      description: 'Competição de cosplays do AnimeCosp 2024',
      tag: 'Evento'
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/400x400/651FFF/FFFFFF?text=Artist+Alley',
      title: 'Artist Alley',
      description: 'Artistas expondo seus trabalhos',
      tag: 'Exposição'
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/400x400/00E5FF/FFFFFF?text=Gaming+Zone',
      title: 'Gaming Zone',
      description: 'Área de jogos e competições',
      tag: 'Games'
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/400x400/FFD600/FFFFFF?text=Painel+Especial',
      title: 'Painel Especial',
      description: 'Discussão com convidados especiais',
      tag: 'Painel'
    },
    {
      id: 5,
      src: 'https://via.placeholder.com/400x400/00C853/FFFFFF?text=Food+Court',
      title: 'Food Court',
      description: 'Área de alimentação temática',
      tag: 'Gastronomia'
    },
    {
      id: 6,
      src: 'https://via.placeholder.com/400x400/FF9100/FFFFFF?text=Merchandise',
      title: 'Merchandise',
      description: 'Produtos exclusivos do evento',
      tag: 'Shopping'
    },
  ];
  
  const displayImages = images || fallbackImages;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <GalleryContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {displayImages.map((image) => (
        <GalleryItem key={image.id} variants={itemVariants}>
          <GalleryImage src={image.src} alt={image.title} />
          {image.tag && <GalleryTag>{image.tag}</GalleryTag>}
          <GalleryInfo className="gallery-info">
            <GalleryTitle>{image.title}</GalleryTitle>
            <GalleryDescription>{image.description}</GalleryDescription>
          </GalleryInfo>
        </GalleryItem>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;