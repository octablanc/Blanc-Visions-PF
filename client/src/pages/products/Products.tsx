import { useEffect } from 'react';
// styles
import { Conteiner } from './styled-components/styled';
//components
import { Filters } from '../../components/Filters/Filters';
//redux
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { getProducts } from '../../redux/slices/products';
import { ProductItem } from './components/ProductItem';

export const Products = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.productsState);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Conteiner className='container'>
      <Filters />
      <div>
        <h1 className='text-center'>Name Categoria</h1>
        <div>
          {products.length &&
            products.map((product) => (
              <ProductItem key={product.code} product={product} />
            ))}
        </div>
      </div>
    </Conteiner>
  );
};
