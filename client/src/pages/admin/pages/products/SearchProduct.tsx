import { useState } from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { useNavigate } from 'react-router';
import { Input } from '../../../../components/Search/styled-components/styles';
import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import { getProductsAdmin } from '../../../../redux/slices/Admin/admin.thunk';
import { searchProductByName } from '../../../../redux/slices/Admin/adminSlice';

export const SearchProduct = () => {
  const dispatch = useAppDispatch();
  const [nameProducts, setNameProducts] = useState('');

  const { paginationAdmin } = useAppSelector((state) => state.adminState);
  const { page, quantity, order } = paginationAdmin;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(getProductsAdmin(1, 100, 'name', order, nameProducts));
  };
  const handleChange = (e: any) => {
    setNameProducts(e.target.value);
    if (e.target.value === '') {
      dispatch(getProductsAdmin(page, quantity, 'id', order));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={nameProducts}
        type='text'
        placeholder='Buscar producto'
        onChange={handleChange}
      />
      <HiOutlineMagnifyingGlass />
    </form>
  );
};
