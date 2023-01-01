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
    (state) => state.productsState
  );
  const { currentCategory } = useAppSelector((state) => state.categoriesState);
  const { search } = useAppSelector((state) => state.productsState);
  const { page, quantity, productsLength, discount, price, data, order } =
    pagination;

  useEffect(() => {
    // search === ''
    //   ?
    const selectOrder: any = document.getElementById('selectOrder');
    selectOrder.selectedIndex = 0;
    dispatch(
      getProductsPage(1, quantity, currentCategory, 0, 0, 'id', 'ASC', search)
    );
    // : dispatch(getSearchProducts(1, quantity, currentCategory, search));
  }, [dispatch, currentCategory, search]);

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
          order,
          search
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
          order,
          search
        )
      );
    }
  };

  return (
    <>
      <Conteiner className="container">
        <Filters />
        <div style={{ justifyContent: 'center' }}>
          {products.length > 0 && (
            <h1 className="text-center">Nuestros Productos</h1>
          )}

          {loading ? (
            <Spinner />
          ) : products.length > 0 ? (
            <ProductsGrid>
              {products.map((product) => (
                <div
                  key={product.code}
                  className="animate__animated animate__fadeIn"
                >
                  <ProductItem product={product} />
                </div>
              ))}
            </ProductsGrid>
          ) : (
            <NotProducts />
          )}

          {products.length > 0 && (
            <Paginate className="animate__animated animate__fadeIn">
              <button onClick={decrement} disabled={page === 1}>
                {'<'}
              </button>
              {Math.ceil(productsLength / quantity) && <h3>{page}</h3>}
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
