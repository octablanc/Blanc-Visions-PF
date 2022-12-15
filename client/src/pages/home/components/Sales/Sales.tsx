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
<<<<<<< HEAD
              key={product.id}
=======
              id={product.id}
>>>>>>> fa3fbc24c341baeeb4ca36095f5be7528a581b80
              name={product.name}
              img={product.image}
              price={product.price}
            />
          ))
      )}
    </SalesContainer>
  );
};
