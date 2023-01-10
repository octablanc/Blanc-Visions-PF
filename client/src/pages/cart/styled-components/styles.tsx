import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;

  .container__products__cart {
    // background-color: lightgray;
    border: 1px solid black;
    width: 75%;
  }
  .container__un__product {
    display: flex;
  }
  .img__pcart {
    width: 12rem;
  }

  .container__data {
    border: 1px solid black;
    position: fixed;
    right: 0;
    top: 30%;
    width: 25%;
  }
`;

export const Contain = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
`;

export const Div = styled.div`
  // margin-bottom: 1rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  gap: 3rem;
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid grey;
  .discountPrice {
    margin-top: 2.3rem;
    display: flex;
    justify-content: center;
  }
  .labelProm {
    color: grey;
    font-size: 1.2rem;
    display: flex;
    align-content: space-between;
  }
  .priceProm {
    text-decoration: line-through;
  }
`;

export const Titles = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  gap: 3rem;
  align-items: center;
  justify-items: center;
  font-size: 1.2rem;
`;

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 2px solid gray;
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-items: center;
`;

export const Quantity = styled.div`
  /* background: yellow; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Operators = styled.div`
  /* background-color: red; */
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-column-gap: 1rem;
  justify-content: center;
  border-color: #c2ad94;
  width: 10rem;
  div {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
  }
  button {
    border: none;
    color: #8b7c69;
    font-size: 1.5rem;
    font-weight: bold;
    background: transparent;
    cursor: pointer;
  }
`;

export const Buttons = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

export const TotalDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Btn = styled.button`
  width: 100%;
  border-radius: 1rem;
  border: none;
  margin: 0.5rem;
  padding: 0.8rem;
  color: white;
  text-shadow: 1px 2px 3px black;
  background: ${(props) => props.theme.colors.secondary};
 
  cursor: pointer;
  :hover {
    border-radius: 1.5rem;
    box-shadow: 3px 3px 3px ${(props) => props.theme.colors.hoverSecondary}, 3px 3px 3px ${(props) => props.theme.colors.hoverSecondary};
  }
`;

export const BtnCheck = styled.button`
  width: 100%;
  border-radius: 1rem;
  margin: 0.5rem;
  padding: 1rem;
  background: ${(props) => props.theme.colors.third};
  /* box-shadow: inset 5px 5px 10px #2d8c89, inset -5px -5px 10px #43cec9; */
  border: none;
  color: white;
  text-shadow: 2px 2px 3px black;
  font-size: 1.5rem;
  cursor: pointer;
  :hover {
    border-radius: 1.5rem;
    // background: ${(props) => props.theme.colors.hoverPrimary};
    box-shadow: 3px 3px 2px ${(props) => props.theme.colors.hoverSecondary}, 3px 3px 3px ${(props) => props.theme.colors.hoverSecondary};
  }
`;

// export const Input = styled.input`
//   width: 100%;
//   border-radius: 0.5rem;
//   margin: 0.5rem;
//   padding: 0.5rem;
//   input {
//     width: 100%;
//     height: 100%;
//     border: none;
//     background-color: black;
//     color: ${(props) => props.theme.colors.secondary};
//   }
// `;

export const Back = styled.button`
  width: 30rem;
  border-radius: 0.5rem;
  border: none;
  margin: 0.5rem;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.secondary};
  :hover {
    cursor: pointer;
  }
`;

export const Remove = styled.button`
  border-radius: 0.5rem;
  border: none;
  border-left: solid 1px ${(props) => props.theme.colors.secondary};
  border-right: solid 1px ${(props) => props.theme.colors.secondary};
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  // margin-top: 0rem;
  background-color: transparent;
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;
