import styled from 'styled-components';

export const Container = styled.div`
  display: flex; 
  position:relative;

  .container__products__cart {
    // background-color: lightgray;
    border:1px solid black;
    width: 75%;
    
  }
  .container__un__product{
    display:flex;
  }
  .img__pcart{
    width:12rem;
  }

  .container__data {
    border:1px solid black;
    position:fixed;
    right:0;
    top:30%;
    width: 25%;
  }
`;
