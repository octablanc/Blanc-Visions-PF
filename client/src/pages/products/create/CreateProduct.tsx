import React, { useState, useEffect } from 'react';
import { Promise } from 'bluebird';

// Styled Components
import {
  FormConteiner,
  Image,
  Fields,
  IconAdd,
  Miniatures,
  PropertyContainer,
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
  Snackbar,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

// Actions
import { getAllCategories } from '../../../redux/slices/products';
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { postProduct } from '../services/products.service';
import { Slider } from '../../detail/components/Slider/Slider';
import { uploadFile } from '../../../firebase/firebase.config';
import { Product } from './models/product';
import Miniature from './components/Miniature';
import MiniatureLoading from './components/MiniatureLoading';
import SliderCreate from './components/SliderCreate';
import { TwoFields } from '../../../components/singup/styled-components/SingUp.styled';
import { Property } from './models/properties.model';
import Properties from './components/Properties';
import { useParams, useNavigate } from 'react-router-dom';
import { updateProductOfAdmin } from '../../../redux/slices/Admin/admin.thunk';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function CreateProduct() {
  const [product, setProduct] = useState<Product>({
    code: '',
    name: '',
    price: '',
    image: 'asd',
    stock: '',
    description: '',
    categoryId: '',
    state: true,
    discount: '',
    images: [],
    properties: [],
  });
  const [error, setError] = useState({
    code: '',
    name: '',
    price: '',
    stock: '',
    description: '',
    discount: '',
    categoryId: '',
    images: [],
  });
  const [property, setProperty] = useState<Property>({
    name: '',
    value: '',
  });
  const [propertyError, setPropertyError] = useState({
    name: false,
    value: false,
  });
  const [open, setOpen] = useState(false);
  var hasError = false;
  const fontSizeLabel = 15;
  const fontSizeInput = 14;
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { categories } = useAppSelector(({ productsState }) => productsState);
  const { currentProduct } = useAppSelector(state => state.adminState);

  const [loading, setLoading] = useState(false);
  const [miniatureLoading, setMiniatureLoading] = useState(false);

  var inputFile: HTMLInputElement | null = null;

  // Get all categories
  useEffect(() => {
    dispatch(getAllCategories());
    if (id) {
      // await dispatch(getProductByIdAdmin(+id));
      setProduct({
        ...product,
        name: currentProduct.name,
        code: currentProduct.code,
        price: currentProduct.price.toString(),
        image: currentProduct.image,
        stock: currentProduct.stock.toString(),
        description: currentProduct.description,
        discount: currentProduct.discount.toString(),
        categoryId: currentProduct.category.id.toString(),
        images: currentProduct.images,
        properties: currentProduct.properties,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handlerChange(key: any, value: any) {
    setProduct({
      ...product,
      [key]: key === 'code' ? (value.length < 6 ? value : product.code) : value,
    });

    setError({
      ...error,
      [key]: !value
        ? // ? `${key.charAt(0).toUpperCase() + key.slice(1)} no puede estar vacío.`
          `Este campo no puede estar vacío.`
        : false,
    });
  }

  function handlerSubmit() {
    var newError = error;

    if (!product.categoryId) {
      hasError = true;
      newError = {
        ...newError,
        categoryId: 'La categoría no puede estar vacía.',
      };
    }

    if (!product.code) {
      hasError = true;
      newError = { ...newError, code: 'El código no puede estar vacío.' };
    }

    if (product.code.length < 5) {
      hasError = true;
      newError = { ...newError, code: 'El código requiere 5 caracteres.' };
    }

    if (!product.description) {
      hasError = true;
      newError = { ...newError, description: '.' };
    }

    if (!product.name) {
      hasError = true;
      newError = { ...newError, name: 'El nombre no puede estar vacío.' };
    }

    if (!product.price) {
      hasError = true;
      newError = { ...newError, price: 'El precio no puede estar vacío' };
    }

    if (!product.discount) {
      hasError = true;
      newError = { ...newError, discount: 'El descuento no puede estar vacío' };
    }

    if (!product.stock) {
      hasError = true;
      newError = { ...newError, stock: 'El stock no puede estar vacío' };
    }

    if (hasError) setError(newError);

    if (!hasError) submit();
  }

  function handleClose(event?: React.SyntheticEvent | Event, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  function submit() {
    if (id) {
      console.log(product.images, product.image, 'productimage');
      dispatch(
        updateProductOfAdmin(currentProduct.id, {
          ...product,
        })
      );
    } else {
      postProduct(
        {
          ...product,
          image: product.images.length
            ? product.images[0].url_image
            : 'https://www.manchesterdirect.com.au/assets/themes/QCS_D/img/default_product.gif?1667962863',
        },
        setLoading,
        setOpen
      );
    }
    setProduct({
      code: '',
      name: '',
      price: '',
      image: '',
      stock: '',
      description: '',
      categoryId: '',
      state: true,
      discount: '',
      images: [],
      properties: [],
    });
    navigate('/dashboard/products');
  }

  const ImagesTest = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQckaIE_TK4UYSEGZGMgHHpmEy9em0rO2x0h1ThLcGRJ0_58nYZY9sp2is0EMFzc6DjphQ&usqp=CAU',
    'https://media.tycsports.com/files/2022/12/19/517541/lionel-messi_1440x810_wmk.webp',
  ];

  function handleChangeInputImage(target: EventTarget & HTMLInputElement) {
    var newFiles = [];

    if (target.files?.length) {
      setMiniatureLoading(true);
      console.log(target.files[0]);
      uploadFile(target.files[0]).then(url => {
        setProduct({
          ...product,
          images: [...product.images, { url_image: url }],
        });
        setMiniatureLoading(false);
      });
    }
  }

  function handleDeleteImage(id: number) {
    setProduct({
      ...product,
      images: product.images.filter((value: any, index: number) => index != id),
    });
  }

  function handleChangeProperty(
    target: EventTarget & (HTMLInputElement | HTMLTextAreaElement)
  ) {
    setProperty({
      ...property,
      [target.name]: target.value,
    });

    if (!target.value)
      setPropertyError({
        ...propertyError,
        [target.name]: true,
      });
    else
      setPropertyError({
        ...propertyError,
        [target.name]: false,
      });
  }

  function addProperty() {
    const newPropertyError = {
      name: false,
      value: false,
    };
    var hasError = false;

    if (!property.name) {
      hasError = true;
      newPropertyError.name = true;
    }

    if (!property.value) {
      hasError = true;
      newPropertyError.value = true;
    }

    if (hasError) setPropertyError(newPropertyError);
    else {
      setProduct({
        ...product,
        properties: [...product.properties, property],
      });

      setProperty({
        name: '',
        value: '',
      });
    }
  }

  function deleteProperty(id: number) {
    setProduct({
      ...product,
      properties: [
        ...product.properties.filter((value, index) => index !== id),
      ],
    });
  }

  return (
    <FormConteiner className='container'>
      <Image>
        <SliderCreate
          images={product.images.map((image: any) => image.url_image)}
        />

        <Miniatures>
          {product.images.length > 0 &&
            product.images.map((image: any, index: number) => (
              <Miniature
                imageUrl={image.url_image}
                id={index}
                deleteImage={handleDeleteImage}
              />
            ))}

          {miniatureLoading && <MiniatureLoading />}

          {(product.images.length === 3 && miniatureLoading) ||
          product.images.length == 4 ? (
            <></>
          ) : (
            <div>
              <input
                ref={input => (inputFile = input)}
                type={'file'}
                style={{ display: 'none' }}
                onChange={({ target }) => handleChangeInputImage(target)}
              />
              <IconAdd>
                <AddPhotoAlternateIcon
                  style={{
                    fontSize: '60px',
                    padding: '10px',
                    borderRadius: '3px',
                    color: '#bdc3d1',
                  }}
                  onClick={() => inputFile?.click()}
                />
              </IconAdd>
            </div>
          )}
        </Miniatures>
      </Image>

      <Fields>
        {id ? <h3>Editar Producto</h3> : <h3>Crear Producto</h3>}

        <div>
          <TextField
            InputLabelProps={{
              style: { fontSize: fontSizeLabel },
            }}
            label='Nombre del producto'
            name='name'
            value={product.name}
            placeholder='Nombre del producto'
            sx={{
              position: 'relative',
              '& p.MuiFormHelperText-root': {
                position: 'absolute',
                bottom: '-22px',
                left: '0px',
              },
              m: 1,
              width: '100%',
              marginBottom: '20px',
            }}
            InputProps={{
              style: { fontSize: fontSizeInput },
            }}
            variant='standard'
            error={error.name ? true : false}
            helperText={
              error.name && (
                <span style={{ fontSize: '13px' }}>{error.name}</span>
              )
            }
            onChange={e => handlerChange(e.target.name, e.target.value)}
            onFocus={e => handlerChange(e.target.name, e.target.value)}
          />

          <TwoFields>
            <TextField
              InputLabelProps={{
                style: { fontSize: fontSizeLabel },
              }}
              label='Código'
              name='code'
              value={product.code}
              sx={{
                position: 'relative',
                '& p.MuiFormHelperText-root': {
                  position: 'absolute',
                  bottom: '-22px',
                  left: '0px',
                },
                m: 1,
                width: '100%',
                marginBottom: '10px',
              }}
              InputProps={{
                style: { fontSize: fontSizeInput },
              }}
              placeholder='El código tiene que tener mas de 5 caracteres'
              variant='standard'
              error={error.code ? true : false}
              helperText={
                error.code && (
                  <span style={{ fontSize: '13px', whiteSpace: 'nowrap' }}>
                    {error.code}
                  </span>
                )
              }
              onChange={e => handlerChange(e.target.name, e.target.value)}
              onFocus={e => handlerChange(e.target.name, e.target.value)}
            />

            <TextField
              InputLabelProps={{
                style: { fontSize: fontSizeLabel },
              }}
              label='Precio'
              name='price'
              value={product.price}
              placeholder='$'
              sx={{
                position: 'relative',
                '& p.MuiFormHelperText-root': {
                  position: 'absolute',
                  bottom: '-22px',
                  left: '0px',
                },
                m: 1,
                width: '100%',
                marginBottom: '10px',
              }}
              InputProps={{
                style: { fontSize: fontSizeInput },
                type: 'number',
              }}
              variant='standard'
              error={error.price ? true : false}
              helperText={
                error.price && (
                  <span style={{ fontSize: '13px' }}>{error.price}</span>
                )
              }
              onChange={e => handlerChange(e.target.name, e.target.value)}
              onFocus={e => handlerChange(e.target.name, e.target.value)}
            />
          </TwoFields>

          <TwoFields>
            <TextField
              InputLabelProps={{
                style: { fontSize: fontSizeLabel },
              }}
              label='Stock'
              name='stock'
              value={product.stock}
              placeholder='Product stock'
              sx={{
                position: 'relative',
                '& p.MuiFormHelperText-root': {
                  position: 'absolute',
                  bottom: '-22px',
                  left: '0px',
                },
                m: 1,
                width: '100%',
                marginBottom: '10px',
              }}
              InputProps={{
                style: { fontSize: fontSizeInput },
                type: 'number',
              }}
              variant='standard'
              error={error.stock ? true : false}
              helperText={
                error.stock && (
                  <span style={{ fontSize: '13px' }}>{error.stock}</span>
                )
              }
              onChange={e => handlerChange(e.target.name, e.target.value)}
              onFocus={e => handlerChange(e.target.name, e.target.value)}
            />

            <TextField
              InputLabelProps={{
                style: { fontSize: fontSizeLabel },
              }}
              label='Descuento'
              name='discount'
              value={product.discount}
              sx={{
                position: 'relative',
                '& p.MuiFormHelperText-root': {
                  position: 'absolute',
                  bottom: '-22px',
                  left: '0px',
                },
                m: 1,
                width: '100%',
                marginBottom: '10px',
              }}
              InputProps={{
                style: { fontSize: fontSizeInput },
                type: 'number',
              }}
              placeholder='Discount to Products'
              variant='standard'
              error={error.discount ? true : false}
              helperText={
                error.discount && (
                  <span style={{ fontSize: '13px', whiteSpace: 'nowrap' }}>
                    {error.discount}
                  </span>
                )
              }
              onChange={e => handlerChange(e.target.name, e.target.value)}
              onFocus={e => handlerChange(e.target.name, e.target.value)}
            />
          </TwoFields>

          <PropertyContainer>
            <TextField
              id='property-name'
              label='Propiedad'
              variant='standard'
              name='name'
              value={property.name}
              error={propertyError.name}
              sx={{
                width: 'calc(49% - 37px)',
                position: 'relative',
                '& p.MuiFormHelperText-root': {
                  position: 'absolute',
                  bottom: '-22px',
                  left: '0px',
                },
                marginBottom: '10px',
              }}
              InputLabelProps={{
                style: {
                  fontSize: fontSizeInput,
                },
              }}
              InputProps={{
                style: {
                  fontSize: fontSizeInput,
                },
              }}
              helperText={
                propertyError.name && (
                  <span style={{ fontSize: '13px' }}>
                    Propiedad esta vacío!
                  </span>
                )
              }
              onChange={({ target }) => handleChangeProperty(target)}
              onFocus={({ target }) => handleChangeProperty(target)}
            />

            <TextField
              id='property-value'
              label='Valor'
              variant='standard'
              name='value'
              value={property.value}
              error={propertyError.value}
              sx={{
                width: 'calc(49% - 37px)',
                position: 'relative',
                '& p.MuiFormHelperText-root': {
                  position: 'absolute',
                  bottom: '-22px',
                  left: '0px',
                },
                marginBottom: '10px',
              }}
              InputLabelProps={{
                style: {
                  fontSize: fontSizeInput,
                },
              }}
              InputProps={{
                style: {
                  fontSize: fontSizeInput,
                },
              }}
              helperText={
                propertyError.value && (
                  <span style={{ fontSize: '13px' }}>Valor esta vacío!</span>
                )
              }
              onChange={({ target }) => handleChangeProperty(target)}
              onFocus={({ target }) => handleChangeProperty(target)}
            />

            <Button
              variant='contained'
              style={{ marginLeft: '30px', marginBottom: '10px' }}
              onClick={addProperty}
              disabled={propertyError.name || propertyError.value}
            >
              Add
            </Button>
          </PropertyContainer>

          <Properties
            properties={product.properties}
            deleteProperty={deleteProperty}
          />

          <FormControl
            fullWidth
            sx={{ margin: '8px' }}
            error={error.categoryId ? true : false}
          >
            <InputLabel
              id='demo-simple-select-label'
              sx={{
                fontSize: fontSizeLabel,
              }}
            >
              Categoría
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              name='categoryId'
              label='Categoría'
              value={product.categoryId}
              sx={{ fontSize: fontSizeInput }}
              onChange={e => handlerChange(e.target.name, e.target.value)}
              onFocus={e => handlerChange(e.target.name, e.target.value)}
              variant='standard'
            >
              {categories.length ? (
                categories.map(category => (
                  <MenuItem
                    value={parseInt(category.id.toString())}
                    sx={{
                      fontSize: fontSizeInput,
                    }}
                  >
                    {category.name}
                  </MenuItem>
                ))
              ) : (
                <></>
              )}
            </Select>
            {error.categoryId ? (
              <FormHelperText>
                <span style={{ fontSize: '13px' }}>
                  Category cannot be empty
                </span>
                .
              </FormHelperText>
            ) : (
              <></>
            )}
          </FormControl>

          <TextField
            name='description'
            label='Descripción'
            multiline
            value={product.description}
            variant='standard'
            rows={3}
            sx={{
              position: 'relative',
              '& p.MuiFormHelperText-root': {
                position: 'absolute',
                bottom: '-22px',
                left: '0px',
              },
              m: 1,
              width: '100%',
              marginBottom: '20px',
              marginTop: '20px',
            }}
            InputProps={{
              style: { fontSize: fontSizeInput },
            }}
            InputLabelProps={{
              style: { fontSize: fontSizeLabel },
            }}
            error={error.description ? true : false}
            helperText={
              error.description && (
                <span style={{ fontSize: '13px' }}>
                  Descripción no puede ir vacío.
                </span>
              )
            }
            onChange={e => handlerChange(e.target.name, e.target.value)}
            onFocus={e => handlerChange(e.target.name, e.target.value)}
          />

          {!loading ? (
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
                error.categoryId
                  ? true
                  : false || error.code
                  ? true
                  : false || error.description
                  ? true
                  : false || error.name
                  ? true
                  : false || error.price
                  ? true
                  : false || error.stock
                  ? true
                  : false
              }
            >
              {id ? 'Editar' : 'Crear'}
            </Button>
          ) : (
            <LoadingButton
              loading
              variant='outlined'
              sx={{
                width: '100%',
                margin: '8px',
                height: '50px',
                backgroundColor: '#66BB6A',
              }}
            />
          )}

          {!loading && (
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert
                severity='success'
                sx={{ width: '100%', fontSize: fontSizeInput }}
              >
                ¡Producto publicado con éxito!
              </Alert>
            </Snackbar>
          )}
        </div>
      </Fields>
    </FormConteiner>
  );
}
