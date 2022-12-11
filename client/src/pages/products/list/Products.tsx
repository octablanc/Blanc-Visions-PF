import { useEffect } from 'react';
// styles
import { Conteiner } from './styled-components/styled';
//components
import { Filters } from '../../../components/Filters/Filters';
import Pagination from '../../../components/paginate/Pagination';
//redux
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { getProducts } from '../../../redux/slices/products';
import { ProductItem } from './components/ProductItem';
import Spinner from '../../../components/Spinner/Spinner';

export const Products = () => {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector((state) => state.productsState);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Conteiner className='container'>
      <Filters />
      <div style={{ justifyContent: 'center' }}>
        <h1 className='text-center'>Name Categoria</h1>
        <div>
          {loading ? (
            <Spinner />
          ) : (
            products.length &&
            products.map((product) => (
              <ProductItem key={product.code} product={product} />
            ))
          )}
        </div>

        <Pagination />
      </div>
    </Conteiner>
  );
};
