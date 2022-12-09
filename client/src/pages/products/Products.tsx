import { Filters } from '../../components/Filters';
import styled from 'styled-components';
import './styled-components/prod.css';
import { useEffect, useState } from 'react';
import Pro from './ejProducts';
import { Form } from './FormProd';

const Div = styled.div`
  /* background: ; */
`;
const Div2 = styled.div`
  /* background: #d794b8; */
`;

const Conteiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
`;
const Card = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  border-bottom: 1px solid black;
  padding-top: 3rem;
  h3 {
    line-height: normal;
  }
`;

export const Products = () => {
  const [product, setProduct] = useState<Pro[]>([]);

  useEffect(() => {
    fetch(`http://localhost:4000/products`)
      .then((resp) => resp.json())
      .then((prod) => {
        console.log(prod);
        setProduct(prod);
      });
  }, []);

  return (
    <Conteiner className='container'>
      <Div>
        <Filters />
      </Div>
      <Div2>
        <h1 className='cat'>Name Categoria</h1>
        <div className='contieneTodo'>
          {product.length &&
            product.map((e) => (
              <Card>
                <div className='image'>
                  <img src={e.image} alt='notfound' />
                </div>
                <div className='description'>
                  <h3>{e.name}</h3>
                  <Form />
                  <ul>
                    {e.description.map((e) => (
                      <li>{e}</li>
                    ))}
                  </ul>
                  <h3>${e.price}</h3>
                </div>
              </Card>
            ))}
        </div>
      </Div2>
    </Conteiner>
  );
};

// const Div = styled.div`
//   background: red;
// `;
// const Div2 = styled.div`
//   background: green;
// `;
// const Div3 = styled.div`
//   background: blue;
// `;
// const Conteiner = styled.div`
//   display: flex;
//   justify-content: space-between;
//   background-color: grey;
//   height: 20rem;
//   align-items: flex-send;
// `; displayflexxxx
