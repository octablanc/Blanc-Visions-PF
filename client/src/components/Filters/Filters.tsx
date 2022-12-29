import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { setCategory } from '../../redux/slices/categories'; //* DELETE
import { getProductsPage } from '../../redux/slices/products';
// import { useEffect } from 'react';

const listPrice = ['10.000', '50.000', '100.000'];
const listDiscount = ['10', '20'];

export const Filters = () => {
  const dispatch = useAppDispatch();
  const { currentCategory } = useAppSelector((state) => state.categoriesState);
  const { pagination } = useAppSelector((state) => state.productsState);
  const { quantity, price, discount, data, order } = pagination;

  const handleDiscount = (e: any) => {
    const isH4: boolean = e.target.nodeName === 'H4';
    const discountHashtag: string = +isH4
      ? e.target.children[0].innerHTML
      : e.target.innerHTML;
    dispatch(getProductsPage(1, quantity, currentCategory, +discountHashtag, price, data, order));
  };

  const handlePrice = (e: any) => {
    const isH4: boolean = e.target.nodeName === 'H4';

    const valueHashtag: string = isH4
      ? e.target.children[0].innerHTML
      : e.target.innerHTML;

    const priceFilter: number = +valueHashtag
      .split('')
      .filter((caracter: string) => caracter !== '.')
      .join('');

    dispatch(getProductsPage(1, quantity, currentCategory, discount, priceFilter, data, order));
  };

  const ResetFilters = (e: any) => {
    dispatch(getProductsPage(1, quantity, undefined, 0, 1, 'id', 'ASC'));
    const selectCategory: any = document.getElementById('selectCategory');
    selectCategory.selectedIndex = 0;
    dispatch(setCategory(undefined))
  }

  const selectTypeOrder = (e: any) => {
    const typeOrder: string = e.target.value;

    if (typeOrder === 'Elegir Opcion') return dispatch(getProductsPage(1, quantity, currentCategory, discount, price, 'id', 'ASC'));
    if (typeOrder === 'Menor Precio') return dispatch(getProductsPage(1, quantity, currentCategory, discount, price, 'price', 'ASC'));
    if (typeOrder === 'Mayor Precio') return dispatch(getProductsPage(1, quantity, currentCategory, discount, price, 'price', 'DESC'));
    if (typeOrder === 'Mayor Descuento') return dispatch(getProductsPage(1, quantity, currentCategory, discount, price, 'discount', 'DESC'));
  }

  return (
    <div>
      <button onClick={ResetFilters}>RESET</button>
      <h2>Refina tu busquedad</h2>
      <div>
        <p>
          ORDERNAR POR:
          <select onChange={selectTypeOrder}>
            <option>Elegir Opcion</option>
            <option> Menor Precio</option>
            <option> Mayor Precio</option>
            <option> Mayor Descuento</option>
          </select>
        </p>
      </div>
      <div>
        <h2>DESCUENTOS</h2>
        {listDiscount.map((discount: string) => (
          <h4 onClick={handleDiscount} key={discount}>
            Desde <span>{discount}</span>% OFF
          </h4>
        ))}

        <h2>PRECIO</h2>
        {listPrice.map((price: string) => (
          <h4 onClick={handlePrice} key={price}>
            A partir de $<span>{price}</span>
          </h4>
        ))}

        <h3>FORMAS DE PAGO</h3>
        <span> 3 cuotas sin interes </span>
        <span> 6 cuotas sin interes </span>

        <h3>FILTERS</h3>
        <p>Catagory :{currentCategory && currentCategory}</p>
        <p>Price : {price && price}</p>
        <p>Discount: {discount && discount}</p>
      </div>
    </div>
  );
};
