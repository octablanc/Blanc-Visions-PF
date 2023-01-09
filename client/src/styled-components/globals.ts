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
  .padding{
    padding: 1rem;
  }

  .active {
    border-bottom: 4px solid ${(props): string => props.theme.colors.primary};
  }
  .transparent{
    background-color: white;
  }

  .table{
    border-collapse: collapse;
    margin: 2.5rem 0;
    font-size: 1.5rem;
    min-width: 100%;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
  }

  table thead tr {
    color: white;
    background-color: #1565C0;
    text-align: left;
    font-weight: bold;
  }

  

  .table th,
  .table td {
    padding: 1.2rem 1.5rem;
  }

  .table tbody tr {
    border-bottom: 1px solid #ddd;
  }

  .table tbody tr:nth-of-type(even){
    background: #f3f3f3;
  }

  .table tbody tr.active {
    font-weight: bold;
    color: #4ad489;
  }

  .table tbody tr:last-of-type {
    border-bottom: 2px solid white;
  }

  .table button {
    padding: 0.6rem 1.5rem;
    border-radius: 1rem;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid ${(props): string => props.theme.colors.primary};
  }

  .table button:hover {
    background: ${(props): string => props.theme.colors.primary};
    color: black;
    transition: 0.3s;
  }

  .main {
    background-color: white;
    border-radius: 1rem;
    overflow: hidden;
    padding: 1rem;
    box-shadow: 0 2rem 3.5rem rgba(0, 0, 0, 0.1);
  }

  .main img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  .swiper-pagination-bullet-active {
    background-color: ${(props): string => props.theme.colors.primary};
  }

  @media (min-width: 768px) {
    .max-width-25 {
      max-width: 25rem;
    }
  }
`;

export default GlobalStyles;
