import { ChangeEvent, useState, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import {
  createNewProduct,
  getAllCategories,
} from '../../../redux/slices/products';
import { FormContainer, Form, Alert } from './styled-components/styled';

export const CrearProduct = () => {
  const { categories } = useAppSelector(state => state.productsState);
  const [product, setProduct] = useState({
    name: '',
    image: '',
    code: '',
    price: 0,
    stock: 0,
    state: true,
    categoryId: '',
    description: '',
  });
  const [error, setError] = useState(false);

  const { name, image, code, price, categoryId, description, stock, state } =
    product;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ([name, image, code, categoryId, description].includes('')) {
      setError(true);
      return;
    }

    const newProduct = {
      name,
      image,
      code,
      price: Number(price),
      stock,
      state,
      categoryId,
      description,
    };

    setError(false);
    dispatch(createNewProduct(newProduct));
    navigate('/products');
  };

  return (
    <div className='container'>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h2 className='text-center'>CrearProduct</h2>
          {error && <Alert>Todos los campos son obligatorios</Alert>}
          <div>
            <label>Nombre: </label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Image: </label>
            <input
              type='text'
              name='image'
              value={image}
              onChange={handleChange}
            />
          </div>
          <div className='grid-form'>
            <div>
              <label>Codigo: </label>
              <input
                type='text'
                name='code'
                value={code}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Precio: </label>
              <input
                type='number'
                name='price'
                value={price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label>Categoria: </label>
            <select name='categoryId' onChange={handleChange}>
              <option value=''>Select category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Descripción: </label>
            <textarea
              name='description'
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button>Create Product</button>
        </Form>
      </FormContainer>
    </div>
  );
};
