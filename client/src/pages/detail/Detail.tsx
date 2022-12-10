import { useState, ChangeEvent } from "react";


import { Swipper } from "./components/swiper";
import image from "./styled-components/camara.jpg";

import {AiFillStar} from 'react-icons/ai';

import styled from "styled-components";

/*.....aca comienzan los ESTILOS ..........*/
const Box = styled.div`
  /* background: green; */
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Div = styled.div`
  /* background: red; */
  /* width: 80%; */
  display: flex;
  flex-direction: column;

`;

const Div1 = styled.div`
  /* background: yellow; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Div2 = styled.div`
  /* background: yellow; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`;

const Div3 = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
margin: 8rem 0rem 0rem 0rem;
`;

const Div4 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

// const Img = styled.img`
//   width: 30vw;
//   height: 50vh;
// `;

// const Miniature = styled.img`
//   width: 8vw;
//   height: 10vh;
// `;

const H5 = styled.h5`
align-self: center;
`;

const Div5 = styled.div`
width: 4rem;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
`;

/*.....aca terminan los ESTILOS ..........*/

export const Detail = () => {
  const [counter, setCounter] = useState(0);
  

  //la función plantea un contador x ahora
  const handleOnClickAdd = (number: number = 1): void => {
    setCounter(counter + 1);
  };

  //la función plantea un contador x ahora
  const handleOnClickSubstract = (number: number = 1): void => {
    setCounter(counter <= 1 ? 0 : counter - 1);
  };

  return (
    <div className="container">
      <Box>
        <Div>
          <Div1>
            <h3>Producto</h3>
            <p><AiFillStar /><AiFillStar /><AiFillStar /></p>
          </Div1>
          {/* <Div2><Swipper /></Div2> */}
          <Swipper />
          {/* <div>
            <Img src={image} alt="imagen del producto" />
          </div>
          <br />

          <Miniature src={image} alt="miniatura1" />
          <Miniature src={image} alt="miniatura1" />
          <Miniature src={image} alt="miniatura1" /> */}
        </Div>

        <Div3>
          <H5>Description</H5>
          <p>esta es la descripción del producto</p>
          <Div4>
            <p>Cantidad</p>
            <Div2>
              <button name="subtract" onClick={() => handleOnClickSubstract()}>
                -
              </button>
              <Div5>{counter}</Div5>
              <button name="add" onClick={(e) => handleOnClickAdd()}>
                +
              </button>
            </Div2>
            <br />
            <button>Agregar al carrito</button>
            {/* <button>Comprar</button> ?????? */}
          </Div4>
        </Div3>
      </Box>
      
    </div>
  );
};
