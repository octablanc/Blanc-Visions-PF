import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { getProductsPage } from '../../redux/slices/products';

import { FilterContent, FilterDiscountPrice } from './styled-components/style';
import { useState } from 'react';

const listPrice = ['10.000', '50.000', '100.000'];
const listDiscount = ['10', '20'];

export const Filters = () => {
  const dispatch = useAppDispatch();
  const { currentCategory } = useAppSelector((state) => state.categoriesState);
  const { pagination } = useAppSelector((state) => state.productsState);
  const { quantity, price, discount, data, order } = pagination;
  const [ordenar, setOrdenar] = useState(''); // MATERIAl

  const handleDiscount = (e: any) => {
    const isH5: boolean = e.target.nodeName === 'H5';
    const discountHashtag: string = +isH5
      ? e.target.children[0].innerHTML
      : e.target.innerHTML;
    dispatch(
      getProductsPage(
        1,
        quantity,
        currentCategory,
        +discountHashtag,
        price,
        data,
        order
      )
    );
  };

  const handlePrice = (e: any) => {
    const isH5: boolean = e.target.nodeName === 'H5';

    const valueHashtag: string = isH5
      ? e.target.children[0].innerHTML
      : e.target.innerHTML;

    const priceFilter: number = +valueHashtag
      .split('')
      .filter((caracter: string) => caracter !== '.')
      .join('');

    dispatch(
      getProductsPage(
        1,
        quantity,
        currentCategory,
        discount,
        priceFilter,
        data,
        order
      )
    );
  };

  // const ResetFilters = (e: any) => {
  //   dispatch(getProductsPage(1, quantity, undefined, 0, 0, 'id', 'ASC'));
  //   const selectCategory: any = document.getElementById('selectCategory');
  //   selectCategory.selectedIndex = 0;
  //   dispatch(setCategory(undefined));
  // };

  // const selectTypeOrder = (e: any) => {
  const selectTypeOrder = (typeOrder: string) => {
    // const typeOrder: string = e.target.value;
    if (typeOrder === 'Sin Ordenar')
      return dispatch(
        getProductsPage(
          1,
          quantity,
          currentCategory,
          discount,
          price,
          'id',
          'ASC'
        )
      );
    if (typeOrder === 'Menor Precio')
      return dispatch(
        getProductsPage(
          1,
          quantity,
          currentCategory,
          discount,
          price,
          'price',
          'ASC'
        )
      );
    if (typeOrder === 'Mayor Precio')
      return dispatch(
        getProductsPage(
          1,
          quantity,
          currentCategory,
          discount,
          price,
          'price',
          'DESC'
        )
      );
    if (typeOrder === 'Mayor Descuento')
      return dispatch(
        getProductsPage(
          1,
          quantity,
          currentCategory,
          discount,
          price,
          'discount',
          'DESC'
        )
      );
  };

  const resetPrice = (e: any) => {
    dispatch(
      getProductsPage(1, quantity, currentCategory, discount, 0, data, order)
    );
  };
  const resetDiscount = (e: any) => {
    dispatch(
      getProductsPage(1, quantity, currentCategory, 0, price, data, order)
    );
  };

  const handleChange = (e: SelectChangeEvent) => {
    setOrdenar(e.target.value as string);
    selectTypeOrder(e.target.value);
  };

  return (
    <div>
      <h3 className="category__name">{currentCategory}</h3>
      <h2>Refina tu busqueda: </h2>
      <FilterContent>
        {price !== 0 && (
          <p>
            Desde ${price}
            <button onClick={resetPrice}>x</button>
          </p>
        )}
        <br />

        {discount !== 0 && (
          <p>
            Desde {discount}%OFF<button onClick={resetDiscount}>x</button>
          </p>
        )}
      </FilterContent>
      <div>
        {/* <h3>ORDERNAR POR:</h3> */}
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Orden</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ordenar}
              label="Orden"
              onChange={handleChange}
            >
              <MenuItem value="Sin Ordenar">Sin Ordenar</MenuItem>
              <MenuItem value="Menor Precio">Menor Precio</MenuItem>
              <MenuItem value="Mayor Precio">Mayor Precio</MenuItem>
              <MenuItem value="Mayor Descuento">Mayor Descuento</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <FilterDiscountPrice>
        <h3>DESCUENTOS</h3>
        {listDiscount.map((discount: string) => (
          <h5 onClick={handleDiscount} key={discount}>
            Desde <span>{discount}</span>% OFF
          </h5>
        ))}

        <h3>PRECIO</h3>
        {listPrice.map((price: string) => (
          <h5 onClick={handlePrice} key={price}>
            A partir de $<span>{price}</span>
          </h5>
        ))}
      </FilterDiscountPrice>
    </div>
  );
};
