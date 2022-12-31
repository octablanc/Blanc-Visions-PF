import { useEffect } from 'react';
// styles
import { Conteiner, Paginate, ProductsGrid } from './styled-components/styled';
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
import { NotProducts } from './components/NotProducts';

export const Products = () => {
  const dispatch = useAppDispatch();
  const { products, loading, pagination } = useAppSelector(
    state => state.productsState
  );
  const { currentCategory } = useAppSelector(state => state.categoriesState);

  const { page, quantity, productsLength, discount, price, data, order } =
    pagination;
  useEffect(() => {
    dispatch(getProductsPage(1, quantity, currentCategory, 0, 0, 'id', 'ASC'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, currentCategory]);

  const increment = () => {
    if (Math.ceil(productsLength / quantity) > page) {
      dispatch(
        getProductsPage(
          page + 1,
          quantity,
          currentCategory,
          discount,
          price,
          data,
          order
        )
      );
    }
  };
  const decrement = () => {
    if (page > 1) {
      dispatch(
        getProductsPage(
          page - 1,
          quantity,
          currentCategory,
          discount,
          price,
          data,
          order
        )
      );
    }
  };

  return (
    <>
      <Conteiner className='container'>
        <Filters />
        <div style={{ justifyContent: 'center' }}>
          <h1 className='text-center'>Nuestros Productos</h1>
          <ProductsGrid>
            {loading ? (
              <Spinner />
            ) : products.length ? (
              products.map(product => (
                <div
                  key={product.code}
                  className='animate__animated animate__fadeIn'
                >
                  <ProductItem product={product} />
                </div>
              ))
            ) : (
              <NotProducts />
            )}
          </ProductsGrid>

          {products.length && (
            <Paginate className='animate__animated animate__fadeIn'>
              <button onClick={decrement} disabled={page === 1}>
                {'<'}
              </button>
              <h3>{page}</h3>

              {/* {Math.ceil(productsLength / quantity) !== page && (
              <button onClick={increment}>{'>'}</button> */}
              {/* )} */}
              <button
                onClick={increment}
                disabled={Math.ceil(productsLength / quantity) === page}
              >
                {'>'}{' '}
              </button>
            </Paginate>
          )}
        </div>
      </Conteiner>
    </>
  );
};
