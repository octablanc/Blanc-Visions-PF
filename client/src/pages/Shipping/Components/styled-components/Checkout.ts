import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Detail = styled.div`
  margin-top: 2rem;
    border-top: black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    justify-content: space-around;
    align-items: center;
    justify-items: end;
    align-content: space-evenly;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Miniatures = styled.div`
  /* background-color: green; */
  /* margin: 0 1rem; */
  width: 7rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  .img {
    max-block-size: 7rem;
    /* min-height: 10rem; */
    /* margin: 0 1rem; */
    /* position: relative; */
    /* box-lines: black; */
    /* border: none; */
    box-shadow: none;
    object-fit: cover;
  }
`;
