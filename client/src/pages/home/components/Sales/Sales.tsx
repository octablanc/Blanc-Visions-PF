import { Card } from './Card';
import { useEffect } from 'react';
import { SalesContainer } from '../../styled-components/styles';
import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import { getProductsDiscountPage } from '../../../../redux/slices/products';
import Spinner from '../../../../components/Spinner/Spinner';
// import { ProductItem } from '../../../products/list/components/ProductItem';
// import { Card } from '@mui/material';

export const Sales = () => {
  const dispatch = useAppDispatch();
  const { loading, discountProducts } = useAppSelector(
    state => state.productsState
  );
  useEffect(() => {
    dispatch(getProductsDiscountPage(1, 8, '', 0, 1, 'discount', 'DESC'));
  }, [dispatch]);
  return (
    <>
      <div className='container'>
        <h3 className='text-center'>Descuentos que no te podes perder :</h3>
        <SalesContainer>
          {loading ? (
            <Spinner />
          ) : (
            discountProducts.map(product => (
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
