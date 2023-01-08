import styled from "styled-components";

export const Container = styled.div`
  /* background: lightcyan; */
  width: 80%;
  grid-template-columns: 2fr 1fr;
  gap: 5rem;
  display: grid;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  justify-items: center;
  align-items: stretch;  
  .address {
    width: 100%;    
    margin: 3rem;
    padding: 3rem;
    border-radius: 3rem;
    box-shadow: 0 8px 50px #23232333;
  }
`;

export const Detail = styled.div`
  /* background: yellow; */
  width: 100%;
  margin: 3rem;
  padding: 3rem;
  border-radius: 3rem;
  box-shadow: 0 8px 50px #23232333;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: end;
  align-content: space-evenly;
  .info {
    width: 100%;
  }
`;

export const Div = styled.div`
  /* background: lightgoldenrodyellow; */
  width: 100%;
  height: 12rem;
  padding-left: 3rem;
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  justify-items: start;
  border-top: solid ${(props) => props.theme.colors.secondary};
  .miniature {
    /* background: green; */
    /* margin: 0 1rem; */
    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-block-size: 6rem;
      min-height: 6rem;
      border: none;
      object-fit: cover;
    }
  }
  .detail {
    /* background: red; */
    display: flex;
    flex-direction: column;
    /* gap: -2rem; */
    .quantity {
      display: grid;
      grid-template-columns: 1fr 3fr;
      gap: 0.5rem;
      justify-items: start;
    }
    .promo {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      justify-items: start;
      .priceProm {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 0.5rem;
        justify-items: start;
        color: ${(props) => props.theme.colors.secondary};
      }
      .discount {
        text-decoration: line-through;        
      }
    }
    .price {
      display: grid;
      grid-template-columns: 1fr 4fr;
      gap: 0.5rem;
      justify-items: start;
    }
  }
`;

export const Bill = styled.div`
  /* background: red; */
  padding-top: 6rem;
  padding-left: 3rem;
  width: auto;
  border-left: solid ${(props) => props.theme.colors.secondary};
  /* border-radius: 3rem; */
  /* box-shadow: 0 8px 50px #23232333; */
  .total{
    font-size: 2rem;
    font-weight: bold;
  }
  `;
