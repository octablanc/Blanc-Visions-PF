import { useEffect } from 'react';
// styles
import { Conteiner, Paginate } from './styled-components/styled';
//components
import { Filters } from '../../../components/Filters/Filters';
//redux
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
// import { changePage, getProductsPage } from '../../../redux/slices/products';
import { getProductsPage } from '../../../redux/slices/products';

// import { getAllCategories, getAllPage, getProductsPage, setPaginationPage } from '../../../redux/slices/products';

import { ProductItem } from './components/ProductItem';
import Spinner from '../../../components/Spinner/Spinner';

import 'animate.css';

export const Products = () => {
  const dispatch = useAppDispatch();
  const { products, loading, pagination } = useAppSelector(
    state => state.productsState
  );

  const { currentCategory } = useAppSelector(state => state.categoriesState);

  const { page, quantity, category, productsLength } = pagination;
  useEffect(() => {
    if (currentCategory === '') {
      dispatch(getProductsPage(page, quantity, undefined));
    } else {
      dispatch(getProductsPage(1, quantity, currentCategory));
    }
  }, [dispatch, currentCategory]);

  const increment = () => {
    if (Math.ceil(productsLength / quantity) > page) {
      dispatch(getProductsPage(page + 1, quantity, category)); // TODO CAMBIAR
    }
  };
  const decrement = () => {
    if (page > 1) {
      dispatch(getProductsPage(page - 1, quantity, category)); // TODO CAMBIAR
    }
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

        {Math.ceil(productsLength / quantity) !== page && (
          <button onClick={increment}>{'>'}</button>
        )}
      </Paginate>
    </>
  );
};
