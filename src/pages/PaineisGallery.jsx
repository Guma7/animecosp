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
    color: ${theme.colors.secondary};
  }
`;

const GalleryDescription = styled.p`
  max-width: 700px;
  margin: 0 auto;
  color: ${theme.colors.text.secondary};
`;

const BackButton = styled(motion.button)`
  background: transparent;
  border: 1px solid ${theme.colors.secondary};
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
    background: rgba(101, 31, 255, 0.1);
    transform: translateX(-5px);
  }
  
  svg {
    margin-right: ${theme.spacing.xs};
  }
`;

const PaineisGallery = () => {
  // Dados simulados para a galeria de painéis
  const paineisImages = [
    {
      id: 1,
      title: 'Painel de Dubladores',
      description: 'Encontro com os dubladores dos seus personagens favoritos',
      src: 'https://p2.trrsf.com/image/fget/cf/2000/0/images.terra.com/2014/07/15/10dubladoresespecialcecilia-lemesrep.jpg',
      tag: 'Dublagem'
    },
    {
      id: 3,
      title: 'Painel: O Futuro dos Animes',
      description: 'Especialistas discutem tendências e o futuro da indústria',
      src: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1973',
      tag: 'Tendências'
    },
    {
      id: 4,
      title: 'Painel de Mangakas',
      description: 'Criadores de mangá compartilham suas experiências',
      src: 'https://vivasaudedigital.com.br/wp-content/uploads/2022/07/yu-gi-oh.jpg',
      tag: 'Mangá'
    },
    {
      id: 5,
      title: 'Painel: Cultura Pop Japonesa',
      description: 'Explorando a influência da cultura pop japonesa no mundo',
      src: 'https://bemvoar.com/wp-content/uploads/2024/08/cultura-pop-japonesa-suas-raizes-e-impacto-mundial.png',
      tag: 'Cultura'
    },
    {
      id: 6,
      title: 'Painel de Produtores',
      description: 'Bastidores da produção de animes e séries',
      src: 'https://nerdizmo.ig.com.br/wp-content/uploads/2020/03/Como-foram-criados-os-cen%C3%A1rios-digitais-de-The-Mandalorian-GEEKNESS01.jpg',
      tag: 'Produção'
    },
    {
      id: 7,
      title: 'Painel: Adaptações de Mangá para Anime',
      description: 'O processo de adaptação de histórias do papel para a tela',
      src: 'https://a.storyblok.com/f/178900/2000x800/d764bb2b23/90cba265694fc55f19c408cba5acc3f91638594855_main.jpg/m/filters:quality(95)format(webp)',
      tag: 'Adaptação'
    },
    {
      id: 8,
      title: 'Painel de Fãs',
      description: 'Comunidade de fãs discutindo suas séries favoritas',
      src: 'https://folhadolitoral.com.br/wp-content/uploads/2020/03/cxjc2be_1584429620.jpg',
      tag: 'Comunidade'
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
            Galeria de <span>Painéis</span>
          </GalleryTitle>
          <GalleryDescription>
            Confira os painéis e discussões mais interessantes das edições anteriores do ANIMECOSP.
            Momentos de aprendizado e troca de experiências com profissionais da indústria e fãs apaixonados.
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
        
        <GalleryComponent images={paineisImages} />
      </motion.div>
    </GalleryContainer>
  );
};

export default PaineisGallery;