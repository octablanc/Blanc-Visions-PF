import styled from "styled-components";



export const Container = styled.div`
  /* background: green; */
  width: 90%;
  min-height: 70rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
`;

export const Image = styled.div`
  /* background: red; */
  display: flex;
  flex-direction: column;
  .img {
    margin-top: 3rem;
  }  
`;

export const Info = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  margin: 6rem 0rem 0rem 0rem;
  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .features {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .list {
    margin-left: 2rem;
  }
  .stock{
    color: grey;
    margin-left: 1rem;
  }
`;

export const CartSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.button`
  width: 70%;
  font-size: 1.6rem;
  padding: 0.8rem;
  margin: 0.5rem;
  border-radius: 8px;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
`;
