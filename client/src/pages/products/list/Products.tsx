import { useEffect, useState } from 'react';
// styles
import { Conteiner } from './styled-components/styled';
//components
import { Filters } from '../../../components/Filters/Filters';
import Pagination from '../../../components/paginate/Pagination';
//redux
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { getProductsPage } from '../../../redux/slices/products';
import { ProductItem } from './components/ProductItem';
import Spinner from '../../../components/Spinner/Spinner';

export const Products = () => {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector((state) => state.productsState);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getProductsPage(page));
  }, [dispatch, page]);

  return (
    <Conteiner className='container'>
      <Filters />
      <div style={{ justifyContent: 'center' }}>
        <h1 className='text-center'>Nuestros Productos</h1>
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

        {/* <Pagination /> */}
      </div>
      <button onClick={() => setPage(page + 1)}>increment</button>
      {page}
      <button onClick={() => setPage(page - 1)}>decrement</button>
    </Conteiner>
  );
};
