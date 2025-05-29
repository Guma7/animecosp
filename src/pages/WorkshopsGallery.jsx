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
    color: ${theme.colors.dark};
  }
`;

const GalleryDescription = styled.p`
  max-width: 700px;
  margin: 0 auto;
  color: ${theme.colors.text.secondary};
`;

const BackButton = styled(motion.button)`
  background: transparent;
  border: 1px solid ${theme.colors.dark};
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
    background: rgba(26, 35, 126, 0.1);
    transform: translateX(-5px);
  }
  
  svg {
    margin-right: ${theme.spacing.xs};
  }
`;

const WorkshopsGallery = () => {
  // Dados simulados para a galeria de workshops
  const workshopsImages = [
    {
      id: 1,
      title: 'Workshop de Desenho Mangá',
      description: 'Aprenda técnicas básicas de desenho no estilo mangá',
      src: 'https://www.mrl.nsw.gov.au/images/UserUploadedImages/132/Manga_webevent.jpg',
      tag: 'Desenho'
    },
    {
      id: 2,
      title: 'Workshop de Cosplay',
      description: 'Técnicas de confecção de trajes e acessórios',
      src: 'https://www.kamuicosplay.com/wp-content/uploads/2024/01/Workshop-by-Kamui-Cosplay.jpg',
      tag: 'Cosplay'
    },
    {
      id: 3,
      title: 'Workshop de Dublagem',
      description: 'Introdução às técnicas de dublagem de personagens',
      src: 'https://www.jbox.com.br/wp/wp-content/uploads/2021/04/materia-destacadaperfil-cecilialemes.jpg',
      tag: 'Dublagem'
    },
    {
      id: 4,
      title: 'Workshop de Animação',
      description: 'Princípios básicos de animação 2D',
      src: 'https://animarestudio.com.br/wp-content/uploads/2020/03/sala-estudio-animacao-interna.jpg',
      tag: 'Animação'
    },
    {
      id: 5,
      title: 'Workshop de Escrita Criativa',
      description: 'Criação de histórias e personagens para mangás e light novels',
      src: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973',
      tag: 'Escrita'
    },
    {
      id: 6,
      title: 'Workshop de Maquiagem para Cosplay',
      description: 'Técnicas especiais de maquiagem para caracterização',
      src: 'https://i0.wp.com/cursapt.wpcomstaging.com/wp-content/uploads/2024/12/A_hyper-realistic_image_of_a_makeup_artist_creatin.jpg?fit=1792%2C1024&ssl=1',
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
            Galeria de <span>Workshops</span>
          </GalleryTitle>
          <GalleryDescription>
            Confira os workshops e atividades práticas das edições anteriores do ANIMECOSP.
            Momentos de aprendizado e desenvolvimento de habilidades com instrutores experientes em diversas áreas.
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
        
        <GalleryComponent images={workshopsImages} />
      </motion.div>
    </GalleryContainer>
  );
};

export default WorkshopsGallery;