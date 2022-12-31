import styled from "styled-components";

export const Container = styled.div`
  /* background: pink; */
  margin-bottom: 2rem;
  width: 100%;
  min-height: 50rem;
  /* max-width: 50rem;
  height: 40rem; */
  /* display: block; */
  /* margin: 3rem auto 0;
  position: relative; */

  /* box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); */

  .buttons {
    /* background: blue; */
    display: flex;
    box-direction: row;
    justify-content: center;
    margin: 1rem 0;
  }
 
`;
export const ContainerImage = styled.div`
  /* background: red; */
  min-height: 40rem;
  width: 50rem;
  height: 40rem;
  border-radius: 2rem;
  /* overflow: hidden; */
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Thumbnails = styled.div`
  /* background-color: yellow; */
  width: 100%;
  min-height: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1rem;
  align-items: center;
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  place-items: center; */
`;

export const Miniatures = styled.div`
  /* background-color: green; */
  /* margin: 0 1rem; */
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  .img {
    max-block-size: 10rem;
    /* min-height: 10rem; */
    /* margin: 0 1rem; */
    /* position: relative; */
    /* box-lines: black; */
    /* border: none; */
    box-shadow: none;
    object-fit: cover;
  }
  .active {
    opacity: 1;
  }
  .pasive {
    opacity: 0.5;
  }
`;
