import { Card } from './Card';
import { Pro } from '../../../products/list/models/ejProducts';
import { useEffect, useState } from 'react';
import { SalesContainer } from '../../styled-components/styles';

export const Sales = () => {
  const [products, setProducts] = useState<Pro[]>([]);

  useEffect(() => {
    fetch(`http://localhost:4000/products`)
      .then(resp => resp.json())
      .then(prod => setProducts(prod));
  }, []);

  return (
    <SalesContainer className='container'>
      {products &&
        products
          .slice(0, 4)
          .map(product => (
            <Card
              name={product.name}
              img={product.image}
              price={product.price}
            />
          ))}
    </SalesContainer>
  );
};
