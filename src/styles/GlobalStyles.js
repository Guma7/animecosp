import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.body};
    background-color: ${theme.colors.background.main};
    color: ${theme.colors.text.primary};
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    margin-bottom: ${theme.spacing.md};
  }

  h1 {
    font-size: 2.5rem;
    
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 3.5rem;
    }
  }

  h2 {
    font-size: 2rem;
    
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: ${theme.spacing.md};
    line-height: 1.6;
  }

  a {
    color: ${theme.colors.accent};
    text-decoration: none;
    transition: color ${theme.animations.fast} ease;
    
    &:hover {
      color: ${theme.colors.highlight};
    }
  }

  button {
    cursor: pointer;
    font-family: ${theme.fonts.body};
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .special-title {
    font-family: ${theme.fonts.special};
    color: ${theme.colors.highlight};
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.md};
  }

  .section {
    padding: ${theme.spacing.xxl} 0;
  }

  .text-center {
    text-align: center;
  }

  .neon-text {
    color: ${theme.colors.accent};
    text-shadow: 0 0 5px ${theme.colors.accent}, 0 0 10px ${theme.colors.accent};
  }

  .glow-text {
    color: ${theme.colors.primary};
    text-shadow: 0 0 5px ${theme.colors.primary}, 0 0 10px ${theme.colors.primary};
  }

  .highlight-text {
    color: ${theme.colors.highlight};
  }
`;

export default GlobalStyles;