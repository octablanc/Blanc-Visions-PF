import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  text-transform: uppercase;

  h1,
  h2,
  h3 {
    margin: 0;
  }

  h1 {
    font-size: 22rem;
    margin-bottom: 0;
    line-height: 20rem;
    color: #262626;
  }

  span {
    margin-left: -3.5rem;
    text-shadow: -8px 0px 0px #fff;
  }

  h2,
  h3 {
    width: 90%;
    line-height: normal;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 400;

    @media (min-width: 768px) {
      width: 30%;
    }
  }

  button {
    margin-top: 2rem;
    background-color: black;
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.8rem;
    font-size: 2rem;
    cursor: pointer;
  }
`;
