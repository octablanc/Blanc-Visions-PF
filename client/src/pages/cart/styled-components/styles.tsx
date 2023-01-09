import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position:relative;
  .container__products__cart {
    background-color: lightgray;
    width: 75%;
  }

  .container__data {
    position:fixed;
    right:0;
    top:30%;
    background-color: blue;
    width: 25%;
  }
`;
