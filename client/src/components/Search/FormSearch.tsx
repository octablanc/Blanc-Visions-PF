import { useState } from 'react';
import { useNavigate } from 'react-router';
import { HiOutlineMagnifyingGlass } from '../../icons';
import { useAppDispatch } from '../../redux/app/hooks';
import { search } from '../../redux/slices/products';

export const FormSearch = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [nameProducts, setNameProducts] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(search(nameProducts));
    navigate('/products');
  };
  const handleChange = (e: any) => {
    setNameProducts(e.target.value);
    if (e.target.value === '') {
      dispatch(search(''));
      navigate('/products');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nameProducts}
        type='text'
        placeholder='Buscar producto'
        onChange={handleChange}
      />
      <HiOutlineMagnifyingGlass />
    </form>
  );
};
