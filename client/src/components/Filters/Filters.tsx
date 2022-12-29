import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { getProductsPage } from '../../redux/slices/products';
// import { useEffect } from 'react';

export const Filters = () => {
  const dispatch = useAppDispatch();
  const { currentCategory } = useAppSelector((state) => state.categoriesState);
  const { pagination } = useAppSelector((state) => state.productsState);
  const { page, quantity } = pagination;

  const handleDiscount = (e: any) => {
    const { innerHTML } = e.target;
    console.log('PRODUCT DESCUENT=>', innerHTML);
    dispatch(getProductsPage(page, quantity, currentCategory, innerHTML));
  };

  const handlePrice = (e: any) => {
    const { innerHTML } = e.target;
    console.log('precio=>', innerHTML);
    // dispatch(getProductsPage(page, quantity, currentCategory, innerHTML));
  };

  return (
    <div>
      <h2>Refina tu busquedad</h2>
      <div>
        <p>
          ORDERNAR POR:
          <select>
            <option> Menor Precio</option>
            <option> Mayor Precio</option>
            <option> Mayor Descuento</option>
          </select>
        </p>
      </div>
      <div>
        <h2>DESCUENTOS</h2>
        <h4>
          Desde <span onClick={handleDiscount}>10</span>% OFF
        </h4>
        <h4>
          Desde <span onClick={handleDiscount}>20</span>% OFF
        </h4>

        <h2>PRECIO</h2>
        <h4>
          A partir de <span onClick={handlePrice}>10.000</span>
        </h4>
        <h4>
          A partir de <span onClick={handlePrice}>$50.000</span>
        </h4>
        <h4>
          A partir de <span onClick={handlePrice}>$100.000</span>
        </h4>

        <h3>FORMAS DE PAGO</h3>
        <span> 3 cuotas sin interes </span>
        <span> 6 cuotas sin interes </span>
      </div>
    </div>
  );
};
