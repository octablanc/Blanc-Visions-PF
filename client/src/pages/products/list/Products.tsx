import { useEffect, useState } from 'react';
// styles
import { Conteiner, Paginate } from './styled-components/styled';
//components
import { Filters } from '../../../components/Filters/Filters';
//redux
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { getAllCategories, getAllPage, getProductsPage } from '../../../redux/slices/products';
import { ProductItem } from './components/ProductItem';
import Spinner from '../../../components/Spinner/Spinner';

import 'animate.css';

export const Products = () => {
  const dispatch = useAppDispatch();
  const { products, loading, totalPages } = useAppSelector(
    state => state.productsState
  );
  const [page, setPage] = useState(1);
  const quantity = 3;
  useEffect(() => {
    dispatch(getProductsPage(page, quantity));
    dispatch(getAllPage());
  }, [dispatch, page]);

  const increment = () => {
    if (Math.ceil(totalPages / quantity) > page) setPage(page + 1);
  };
  const decrement = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <>
      <Conteiner className='container'>
        <Filters />
        <div style={{ justifyContent: 'center' }}>
          <h1 className='text-center'>Nuestros Productos</h1>
          <div>
            {loading ? (
              <Spinner />
            ) : (
              products.length &&
              products.map(product => (
                <div
                  key={product.code}
                  className='animate__animated animate__fadeIn'
                >
                  <ProductItem product={product} />
                </div>
              ))
            )}
          </div>

          {/* <Pagination /> */}
        </div>
      </Conteiner>
      <Paginate>
        {page !== 1 && <button onClick={decrement}>{'<'}</button>}
        <h3>{page}</h3>
        {Math.ceil(totalPages / quantity) !== page && (
          <button onClick={increment}>{'>'}</button>
        )}
      </Paginate>
    </>
  );
};
