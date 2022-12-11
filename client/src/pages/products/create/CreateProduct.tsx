import { useState } from 'react';
import {
  FormConteiner,
  Image,
  Fields,
} from './styled-components/CreateProduct.styled';
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

export default function CreateProduct() {
  const [product, setProduct] = useState({
    code: '',
    name: '',
    price: 0,
    stock: 0,
    description: '',
    image: '',
    categoryId: 0,
  });
  const [error, setError] = useState({
    code: false,
    name: false,
    price: false,
    stock: false,
    description: false,
    image: false,
    categoryId: false,
  });
  var hasError = false;
  const fontSizeLabel = 17;
  const fontSizeInput = 15;

  function handlerChange(key: any, value: any) {
    setProduct({
      ...product,
      [key]: value,
    });

    setError({
      ...error,
      [key]: !value ? true : false,
    });
  }

  function handlerSubmit() {
    var newError = error;

    if (!product.categoryId) {
      hasError = true;
      newError = { ...newError, categoryId: true };
    }

    if (!product.code) {
      hasError = true;
      newError = { ...newError, code: true };
    }

    if (!product.description) {
      hasError = true;
      newError = { ...newError, description: true };
    }

    if (!product.image) {
      hasError = true;
      newError = { ...newError, image: true };
    }

    if (!product.name) {
      hasError = true;
      newError = { ...newError, name: true };
    }

    if (!product.price) {
      hasError = true;
      newError = { ...newError, price: true };
    }

    if (!product.stock) {
      hasError = true;
      newError = { ...newError, stock: true };
    }

    if (hasError) setError(newError);

    if (!hasError) submit();
  }

  function submit() {
    console.log('Formulario enviado ');
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
          <SwiperSlide
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '400px',
            }}
          >
            <img
              src='https://m.media-amazon.com/images/I/513ZXjlEGIL._AC_SX466_.jpg'
              alt='camara'
            />
          </SwiperSlide>

          <SwiperSlide
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '400px',
            }}
          >
            <img
              src='https://m.media-amazon.com/images/I/41l4wwQ3bLL._AC_SX466_.jpg'
              alt='camara'
            />
          </SwiperSlide>

          <SwiperSlide
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '400px',
            }}
          >
            <img
              src='https://m.media-amazon.com/images/I/41CcqIZDO8L._AC_SX466_.jpg'
              alt='camara'
            />
          </SwiperSlide>
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
            sx={{ m: 1, width: '100%' }}
            InputProps={{
              style: { fontSize: fontSizeInput },
            }}
            variant='outlined'
            error={error.name}
            helperText={
              error.name && (
                <span style={{ fontSize: '13px' }}>Name cannot be empty.</span>
              )
            }
            onChange={(e: any) => handlerChange(e.target.name, e.target.value)}
          />

          <TextField
            InputLabelProps={{
              style: { fontSize: fontSizeLabel },
            }}
            label='Image'
            name='image'
            sx={{ m: 1, width: '100%' }}
            InputProps={{
              style: { fontSize: fontSizeInput },
            }}
            variant='outlined'
            error={error.image}
            helperText={
              error.image && (
                <span style={{ fontSize: '13px' }}>Image cannot be empty.</span>
              )
            }
            onChange={(e: any) => handlerChange(e.target.name, e.target.value)}
          />

          <TextField
            InputLabelProps={{
              style: { fontSize: fontSizeLabel },
            }}
            label='Code'
            name='code'
            sx={{ m: 1, width: '100%' }}
            InputProps={{
              style: { fontSize: fontSizeInput },
            }}
            variant='outlined'
            error={error.code}
            helperText={
              error.code && (
                <span style={{ fontSize: '13px' }}>Code cannot be empty.</span>
              )
            }
            onChange={(e: any) => handlerChange(e.target.name, e.target.value)}
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
            error={error.price}
            helperText={
              error.price && (
                <span style={{ fontSize: '13px' }}>Price cannot be empty.</span>
              )
            }
            onChange={(e: any) => handlerChange(e.target.name, e.target.value)}
          />

          <TextField
            InputLabelProps={{
              style: { fontSize: fontSizeLabel },
            }}
            label='Stock'
            name='stock'
            sx={{ m: 1, width: '100%' }}
            InputProps={{
              style: { fontSize: fontSizeInput },
              type: 'number',
            }}
            variant='outlined'
            error={error.stock}
            helperText={
              error.stock && (
                <span style={{ fontSize: '13px' }}>Stock cannot be empty.</span>
              )
            }
            onChange={(e: any) => handlerChange(e.target.name, e.target.value)}
          />

          <FormControl
            fullWidth
            sx={{ margin: '8px' }}
            error={error.categoryId}
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
              onChange={(e: any) =>
                handlerChange(e.target.name, e.target.value)
              }
            >
              <MenuItem
                value={1}
                sx={{
                  fontSize: fontSizeInput,
                }}
              >
                Cameras
              </MenuItem>
              <MenuItem
                value={2}
                sx={{
                  fontSize: fontSizeInput,
                }}
              >
                Lenses
              </MenuItem>
            </Select>
            {error.categoryId ? (
              <FormHelperText>Category cannot be empty.</FormHelperText>
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
            error={error.description}
            helperText={
              error.description && (
                <span style={{ fontSize: '13px' }}>
                  Description cannot be empty.
                </span>
              )
            }
            onChange={(e: any) => handlerChange(e.target.name, e.target.value)}
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
              error.categoryId ||
              error.code ||
              error.description ||
              error.image ||
              error.name ||
              error.price ||
              error.stock
            }
          >
            Create
          </Button>
        </div>
      </Fields>
    </FormConteiner>
  );
}
