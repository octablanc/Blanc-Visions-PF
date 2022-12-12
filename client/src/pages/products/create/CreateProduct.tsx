import { useState, useEffect } from 'react';

// Styled Components
import {
  FormConteiner,
  Image,
  Fields,
} from './styled-components/CreateProduct.styled';

// Material UI
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from '@mui/material';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Actions
import { getCategories } from '../../../redux/slices/categories';
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { postProduct } from '../services/products.service';

export default function CreateProduct() {
  const [product, setProduct] = useState({
    code: '',
    name: '',
    price: 0,
    stock: 0,
    description: '',
    image: '',
    categoryId: 0,
    state: true
  });
  const [error, setError] = useState({
    code: '',
    name: '',
    price: '',
    stock: '',
    description: '',
    image: '',
    categoryId: '',
  });
  var hasError = false;
  const fontSizeLabel = 17;
  const fontSizeInput = 15;
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(({ categoriesState }) => categoriesState);

  // Get all categories
  useEffect(() => {
    if (!categories.length)
      dispatch(getCategories());
  }, []);

  function handlerChange(key: any, value: any) {
    setProduct({
      ...product,
      [key]: key === 'code'? (value.length < 6? value: product.code) : value,
    });

    setError({
      ...error,
      [key]: !value ? `${key.charAt(0).toUpperCase() + key.slice(1)} cannot be empty.` : false,
    });
  }

  function handlerSubmit() {
    var newError = error;

    if (!product.categoryId) {
      hasError = true;
      newError = { ...newError, categoryId: 'Category cannot be empty.' };
    }

    if (!product.code) {
      hasError = true;
      newError = { ...newError, code: 'Code cannot be empty.' };
    }

    if (product.code.length < 5) {
      hasError = true;
      newError = { ...newError, code: 'Code requires 5 characters.' };
    }

    if (!product.description) {
      hasError = true;
      newError = { ...newError, description: '.' };
    }

    if (!product.image) {
      hasError = true;
      newError = { ...newError, image: 'Image cannot be empty.' };
    }

    if (!product.name) {
      hasError = true;
      newError = { ...newError, name: 'Name cannot be empty.' };
    }

    if (!product.price) {
      hasError = true;
      newError = { ...newError, price: 'Price cannot be empty.' };
    }

    if (!product.stock) {
      hasError = true;
      newError = { ...newError, stock: 'Stock cannot be empty.' };
    }

    if (hasError) setError(newError);

    if (!hasError) submit();
  }

  function submit() {
    postProduct(product);
  }
  return (
    <FormConteiner className='container'>
      <Image>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {
            product.image ? <SwiperSlide
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '400px',
              }}
            >
              <img
                src={product.image}
                alt='Product Image'
              />
            </SwiperSlide>
              : <></>
          }
        </Swiper>
      </Image>

      <Fields>
        <h3>Create product</h3>
        <div>
          <TextField
            InputLabelProps={{
              style: { fontSize: fontSizeLabel },
            }}
            label='Name'
            name='name'
            placeholder='Product name'
            sx={{ m: 1, width: '100%' }}
            InputProps={{
              style: { fontSize: fontSizeInput },
            }}
            variant='outlined'
            error={error.name? true:false}
            helperText={
              error.name && (
                <span style={{ fontSize: '13px' }}>{error.name}</span>
              )
            }
            onChange={(e) => handlerChange(e.target.name, e.target.value)}
          />

          <TextField
            InputLabelProps={{
              style: { fontSize: fontSizeLabel },
            }}
            label='Image'
            name='image'
            placeholder='Image URL'
            sx={{ m: 1, width: '100%' }}
            InputProps={{
              style: { fontSize: fontSizeInput },
            }}
            variant='outlined'
            error={error.image? true:false}
            helperText={
              error.image && (
                <span style={{ fontSize: '13px' }}>{error.image}</span>
              )
            }
            onChange={(e) => handlerChange(e.target.name, e.target.value)}
          />

          <TextField
            InputLabelProps={{
              style: { fontSize: fontSizeLabel },
            }}
            label='Code'
            name='code'
            value={product.code}
            sx={{ m: 1, width: '100%' }}
            InputProps={{
              style: { fontSize: fontSizeInput },
            }}
            placeholder='Code of 5 characters'
            variant='outlined'
            error={error.code? true:false}
            helperText={
              (error.code && (
                <span style={{ fontSize: '13px' }}>{error.code}</span>
              ))
            }
            onChange={(e) => handlerChange(e.target.name, e.target.value)}
          />

          <TextField
            InputLabelProps={{
              style: { fontSize: fontSizeLabel },
            }}
            label='Price'
            name='price'
            placeholder='$'
            sx={{ m: 1, width: '100%' }}
            InputProps={{
              style: { fontSize: fontSizeInput },
              type: 'number',
            }}
            variant='outlined'
            error={error.price? true:false}
            helperText={
              error.price && (
                <span style={{ fontSize: '13px' }}>{error.price}</span>
              )
            }
            onChange={(e) => handlerChange(e.target.name, e.target.value)}
          />

          <TextField
            InputLabelProps={{
              style: { fontSize: fontSizeLabel },
            }}
            label='Stock'
            name='stock'
            placeholder='Product stock'
            sx={{ m: 1, width: '100%' }}
            InputProps={{
              style: { fontSize: fontSizeInput },
              type: 'number',
            }}
            variant='outlined'
            error={error.stock? true:false}
            helperText={
              error.stock && (
                <span style={{ fontSize: '13px' }}>{error.stock}</span>
              )
            }
            onChange={(e) => handlerChange(e.target.name, e.target.value)}
          />

          <FormControl
            fullWidth
            sx={{ margin: '8px' }}
            error={error.categoryId? true:false}
          >
            <InputLabel
              id='demo-simple-select-label'
              sx={{
                fontSize: fontSizeLabel,
              }}
            >
              Category
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              name='categoryId'
              label='Category '
              sx={{ fontSize: fontSizeInput }}
              onChange={(e) => handlerChange(e.target.name, e.target.value)}
            >
              {
                categories.length ? categories.map(
                  (category) =>
                    <MenuItem
                      value={parseInt(category.id.toString())}
                      sx={{
                        fontSize: fontSizeInput,
                      }}
                    >
                      {category.name}
                    </MenuItem>
                ) : <></>
              }
            </Select>
            {error.categoryId ? (
              <FormHelperText><span style={{ fontSize: '13px' }}>Category cannot be empty</span>.</FormHelperText>
            ) : (
              <></>
            )}
          </FormControl>

          <TextField
            name='description'
            label='Description'
            multiline
            rows={4}
            sx={{ m: 1, width: '100%' }}
            InputProps={{
              style: { fontSize: fontSizeInput },
            }}
            InputLabelProps={{
              style: { fontSize: fontSizeLabel },
            }}
            error={error.description? true:false}
            helperText={
              error.description && (
                <span style={{ fontSize: '13px' }}>
                  Description cannot be empty.
                </span>
              )
            }
            onChange={(e) => handlerChange(e.target.name, e.target.value)}
          />

          <Button
            variant='contained'
            color='success'
            sx={{
              width: '100%',
              margin: '8px',
              height: '50px',
              fontSize: fontSizeInput,
            }}
            onClick={handlerSubmit}
            disabled={
              error.categoryId? true:false ||
              error.code? true:false ||
              error.description? true:false ||
              error.image? true:false ||
              error.name? true:false ||
              error.price? true:false ||
              error.stock? true:false
            }
          >
            Create
          </Button>
        </div>
      </Fields>
    </FormConteiner>
  );
}
