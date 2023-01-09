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


export const BtnCheck = styled.button`
  width: 100%;
  border-radius: 1rem;
  margin: 0.5rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: inset 5px 5px 10px #2d8c89, inset -5px -5px 10px #43cec9;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  :hover {
    border-radius: 10px;
    background: #279692;
    box-shadow: inset -17px -17px 34px #103c3a, inset 17px 17px 34px #3ef0ea;
    color: black;
  }
  `;
