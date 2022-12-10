import styled from 'styled-components';
import { Cards } from './components/Cards';
import Pro from '../../../products/models/ejProducts';
import { useEffect, useState } from 'react';

const Div = styled.div`
  width: 103rem;
  height: 26rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  grid-auto-columns: minmax(26rem, auto);
  /* background-color: bisque; */
`;

export const Sales = () => {
  const [products, setProducts] = useState<Pro[]>([]);

  useEffect(() => {
    fetch(`http://localhost:4000/products`)
      .then((resp) => resp.json())
      .then((prod) => setProducts(prod));
  }, []);

  return (
    <Div className='container'>
      {products &&
        products
          .slice(2, 6)
          .map((cat) => (
            <Cards name={cat.name} img={cat.image} price={cat.price} />
          ))}
    </Div>
  );
};
