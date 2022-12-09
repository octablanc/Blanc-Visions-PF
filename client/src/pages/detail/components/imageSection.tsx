

import React from 'react'
import styled from "styled-components";
import image from '../styled-components/camara.jpg';

const Div = styled.div`
background: green;
`;


export const imageSection = ({image}: any) => {
  return (
    <Div>
        <h3>Nombre del producto</h3>
        <img src={image}/>
        
    </Div>
  )
}


