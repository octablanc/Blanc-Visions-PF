import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { getProductsPage } from '../../redux/slices/products';
// import { useEffect } from 'react';

const listPrice = ['10.000', '50.000', '100.000'];
const listDiscount = ['10', '20'];

export const Filters = () => {
  const dispatch = useAppDispatch();
  const { currentCategory } = useAppSelector((state) => state.categoriesState);
  const { pagination } = useAppSelector((state) => state.productsState);
  const { quantity, price, discount } = pagination;

  const handleFilter = (e: any) => {
    const { value } = e.target;
    console.log(value);
    if (value === 'Mayor Precio') {
      dispatch(getProductsPage(1, quantity, currentCategory, discount, price));
    } else if (value === 'Menor Precio') {
      dispatch(getProductsPage(1, quantity, currentCategory, discount, price));
    } else {
      console.log('descuento');
      dispatch(getProductsPage(1, quantity, currentCategory, discount, price));
    }
  };

  const handleDiscount = (e: any) => {
    const isH4: boolean = e.target.nodeName === 'H4';
    const valueHashtag: string = +isH4
      ? e.target.children[0].innerHTML
      : e.target.innerHTML;
    dispatch(
      getProductsPage(1, quantity, currentCategory, +valueHashtag, price)
      // getProductsPage(page, quantity, currentCategory, +valueHashtag, price)
    );
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

    dispatch(
      getProductsPage(1, quantity, currentCategory, discount, priceFilter)
      // getProductsPage(page, quantity, currentCategory, discount, priceFilter)
    );
  };

  return (
    <div>
      <h2>Refina tu busquedad</h2>
      <div>
        <h2>
          ORDERNAR POR:
          <select onChange={handleFilter}>
            <option>Menor Precio</option>
            <option>Mayor Precio</option>
            <option>Mayor Descuento</option>
          </select>
        </h2>
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
        <p>{currentCategory && currentCategory}</p>
        <p>Price : {price && price}</p>
        <p>Discount: {discount && discount}</p>
      </div>
    </div>
  );
};
