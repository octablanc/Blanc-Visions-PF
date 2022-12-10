import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { PropsTheme } from './theme';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    /* font-family: */
    font-family: ${(props: PropsTheme) => props.theme.fonts.poppins};
    font-size: 1.6rem;
    line-height: 1.8;
  }

  /* Globales */
  h1,
  h2,
  h3 {
    margin: 0 0 3rem 0;
  }

  h1 {
    font-size: 3.5rem;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4.5rem;
    }
  }

  h2 {
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 3.8rem;
    }
  }

  h3 {
    font-size: 2.4rem;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 3rem;
    }
  }

  img {
    max-width: 100%;
    
  }

  a {
    text-decoration: none;
  }

  section {
    margin-top: 2rem;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  @media (min-width: 768px) {
    section {
      margin: 4rem;
    }
  }

  .container {
    max-width: 120rem;
    margin-left: auto;
    margin-right: auto;
    width: 98%;
  }

  .text-center {
    text-align: center;
  }

  @media (min-width: 768px) {
    .max-width-25 {
      max-width: 25rem;
    }
  }
`;

export default GlobalStyles;
