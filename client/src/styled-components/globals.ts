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
    font-size: 1.4rem;
    line-height: 1.8;
  }

  /* Globales */
  h1,
  h2,
  h3 {
    margin: 0 0 1rem 0;
  }

  h1 {
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    display: inline-block;
  }

  h2:after {
    content: "";
    background-color: ${(props): string => props.theme.colors.primary};
    height: 0.7rem;
    width: calc(100% + 0.5rem);
    display: block;
    margin-top: -1.5rem;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 2.3rem;
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

  .active {
    border-bottom: 4px solid ${(props): string => props.theme.colors.primary};
  }

  @media (min-width: 768px) {
    .max-width-25 {
      max-width: 25rem;
    }
  }
`;

export default GlobalStyles;
