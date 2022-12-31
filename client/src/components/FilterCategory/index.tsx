import { MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/app/hooks';
import { setCategory } from '../../redux/slices/categories';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const FilterCategory = () => {
  const { categories, currentCategory } = useAppSelector(
    state => state.categoriesState
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: SelectChangeEvent<string>) => {
    dispatch(setCategory(e.target.value));
    navigate('/products');
  };

  return (
    <FormControl sx={{ m: 1, width: 170 }}>
      <Select
        value={currentCategory}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{ fontSize: 12 }}
      >
        <MenuItem value='' sx={{ fontSize: 13 }}>
          Todas las categorias
        </MenuItem>
        {categories.map(category => (
          <MenuItem
            sx={{ fontSize: 13 }}
            key={category.id}
            value={category.name}
          >
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
