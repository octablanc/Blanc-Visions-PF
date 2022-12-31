import { Card } from './Card';
import { useEffect } from 'react';
import { SalesContainer } from '../../styled-components/styles';
import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import { getProductsPage } from '../../../../redux/slices/products';
import Spinner from '../../../../components/Spinner/Spinner';
// import { ProductItem } from '../../../products/list/components/ProductItem';
// import { Card } from '@mui/material';

export const Sales = () => {
  const dispatch = useAppDispatch();
  const { loading, products } = useAppSelector((state) => state.productsState);
  const { currentCategory } = useAppSelector((state) => state.categoriesState);
  useEffect(() => {
    dispatch(getProductsPage(1, 8, currentCategory, 0, 1, 'discount', 'DESC'));
  }, [dispatch]);
  return (
    <>
      <div className='container'>
        <h3 className='text-center'>Descuentos que no te podes perder :</h3>
        <SalesContainer>
          {loading ? (
            <Spinner />
          ) : (
            products.length &&
            products.map((product) => (
              <Card product={product} key={product.code} />
            ))
          )}
          {/* {loading ? (
            <Spinner />
          ) : (
            products &&
            products
              .slice(0, 4)
              .map((product) => (
                <Card
                 product={product}
                />
              ))
          )} */}
        </SalesContainer>
      </div>
    </>
  );
};
