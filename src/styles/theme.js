// Tema com cores inspiradas em universos geek (Marvel, Star Wars, gibis)
const theme = {
  colors: {
    primary: '#FF1744', // Vermelho vibrante (estilo Marvel)
    secondary: '#651FFF', // Roxo/violeta (estilo cósmico)
    accent: '#00E5FF', // Azul neon (estilo sabre de luz)
    highlight: '#FFD600', // Amarelo vibrante (estilo comics)
    dark: '#1A237E', // Azul escuro (estilo noite estrelada)
    light: '#F5F5F5', // Branco suave para fundos
    success: '#00C853', // Verde vibrante
    warning: '#FF9100', // Laranja alerta
    background: {
      main: '#0A1929', // Fundo escuro estilo espaço
      paper: '#121212', // Fundo de cards
      alt: '#1E1E1E', // Fundo alternativo
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0BEC5',
      disabled: '#78909C',
    },
    gradients: {
      hero: 'linear-gradient(135deg, #FF1744 0%, #651FFF 100%)',
      card: 'linear-gradient(135deg, #1A237E 0%, #311B92 100%)',
      button: 'linear-gradient(90deg, #FF1744 0%, #FF4081 100%)',
      section: 'linear-gradient(180deg, #0A1929 0%, #1A237E 100%)',
    }
  },
  fonts: {
    heading: '"Montserrat", sans-serif',
    body: '"Roboto", sans-serif',
    special: '"Bangers", cursive', // Fonte estilo comic para títulos especiais
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '50%',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.15)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.2)',
    large: '0 8px 24px rgba(0, 0, 0, 0.25)',
    neon: '0 0 10px rgba(0, 229, 255, 0.7), 0 0 20px rgba(0, 229, 255, 0.5)',
    glow: '0 0 10px rgba(255, 23, 68, 0.7), 0 0 20px rgba(255, 23, 68, 0.5)',
  },
  animations: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s',
  }
};

export default theme;