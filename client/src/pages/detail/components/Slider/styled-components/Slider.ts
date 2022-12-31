import styled from "styled-components";

export const Container = styled.div`
  /* background: pink; */
  max-width: 50rem;
  height: 40rem;
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

  .img {
    /* background:violet; */
    /* margin: 3rem auto 0; */   
    position: relative;
    border-radius: 2rem;
    /* overflow: hidden; */
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

export const Thumbnails = styled.div`
  /* background-color: yellow; */
  max-width: 50rem;
  height: 10rem;
  display: flex;
  flex-direction: row;
`;

export const Miniatures = styled.div`
  /* background-color: green; */
  margin: 0 1rem;
  width: 100%;
  height: 100%;
  .img {
    max-block-size: 10rem;
    /* margin: 0 1rem; */
    position: relative;
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
