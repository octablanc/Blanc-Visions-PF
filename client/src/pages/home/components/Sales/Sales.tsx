import { Card } from './Card';
import { useEffect } from 'react';
import { SalesContainer } from '../../styled-components/styles';
import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import { getAllProducts } from '../../../../redux/slices/products';
import Spinner from '../../../../components/Spinner/Spinner';

export const Sales = () => {
  const dispatch = useAppDispatch();
  const { loading, products } = useAppSelector((state) => state.productsState);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <SalesContainer className='container'>
      {loading ? (
        <Spinner />
      ) : (
        products &&
        products
          .slice(0, 4)
          .map((product) => (
            <Card
              key={product.id}
              name={product.name}
              img={product.image}
              price={product.price}
            />
          ))
      )}
    </SalesContainer>
  );
};
