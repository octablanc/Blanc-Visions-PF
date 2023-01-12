import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import {
  getAllCategoriesAdmin,
  updateProductOfAdmin,
} from '../../../../redux/slices/Admin/admin.thunk';
import {
  FormContainer,
  Form,
} from '../../../products/create/styled-components/styled';

export const FormProduct = () => {
  const { currentProduct, categories } = useAppSelector(
    state => state.adminState
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState<any>({
    name: '',
    image: '',
    images: [],
    code: '',
    price: '',
    stock: '',
    discount: '',
    categoryId: '',
    description: '',
    properties: [],
  });
  const [formImages, setFormImages] = useState<any>({
    id: '',
    productId: '',
    url_image: '',
  });
  // const [property, setProperty] = useState<any>({
  //   name: '',
  //   value: '',
  // });

  const {
    name,
    images,
    code,
    price,
    stock,
    discount,
    categoryId,
    description,
    properties,
  } = product;

  const handleChange = (e: any) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePropertyName = (e: any, id: any) => {
    setProduct({
      ...product,
      properties: product.properties.map((property: any) => {
        if (property.id === id) {
          return {
            ...property,
            name: e.target.value,
          };
        }
        return property;
      }),
    });
  };

  const handleChangePropertyValue = (e: any, id: any) => {
    setProduct({
      ...product,
      properties: product.properties.map((property: any) => {
        if (property.id === id) {
          return {
            ...property,
            value: e.target.value,
          };
        }
        return property;
      }),
    });
  };

  // const handleChangeProperty = (e: any) => {
  //   setProperty({
  //     ...property,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmitProperty = (e: any) => {
  //   e.preventDefault();
  //   setProduct({
  //     ...product,
  //     properties: [...properties, property],
  //   });
  //   setProperty({
  //     name: '',
  //     value: '',
  //   });
  // };

  const handleSubmitProduct = async (e: any) => {
    e.preventDefault();
    await dispatch(updateProductOfAdmin(currentProduct.id, product));
    navigate('/dashboard/products');
  };

  useEffect(() => {
    dispatch(getAllCategoriesAdmin());
    setProduct({
      ...product,
      name: currentProduct.name,
      code: currentProduct.code,
      price: currentProduct.price.toString(),
      image: currentProduct.image,
      stock: currentProduct.stock.toString(),
      description: currentProduct.description,
      categoryId: currentProduct.category.id.toString(),
      discount: currentProduct.discount.toString(),
      images: currentProduct.images,
      properties: currentProduct.properties,
      state: currentProduct.state,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container'>
      <FormContainer>
        <h2 className='text-center'>Editar Producto</h2>
        <hr />
        {/* <img width={200} height={200} src={image} alt='imagen' /> */}
        {images.map((image: any) => (
          <img width={100} height={100} src={image.url_image} alt='img' />
        ))}

        <Form onSubmit={handleSubmitProduct}>
          {/* {error && <Alert>Todos los campos son obligatorios</Alert>} */}
          <div>
            <label>imagenes</label>
            {images.map((image: any) => (
              <input
                type='text'
                value={image.url_image}
                onChange={e =>
                  setProduct({
                    ...product,
                    images: product.images.map((product: any) => {
                      if (product.id === image.id) {
                        return {
                          ...product,
                          url_image: e.target.value,
                        };
                      }
                      return product;
                    }),
                  })
                }
              />
            ))}
          </div>
          <div>
            <label>Nombre: </label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={handleChange}
            />
          </div>
          {/* <div>
            <label>Image: </label>
            <input
              type='text'
              name='image'
              value={image}
              onChange={handleChange}
            />
          </div> */}
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
            <div>
              <label>Stock: </label>
              <input
                type='number'
                name='stock'
                value={stock}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Descuento: </label>
              <input
                type='number'
                name='discount'
                value={discount}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label>Categoria: </label>
            <select
              name='categoryId'
              value={categoryId}
              onChange={handleChange}
            >
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

          <div>
            <label>Propiedades: </label>
            {properties.map((property: any, index: any) => (
              <div key={index}>
                <input
                  type='text'
                  value={property.name}
                  onChange={e => handleChangePropertyName(e, property.id)}
                />
                <input
                  type='text'
                  value={property.value}
                  onChange={e => handleChangePropertyValue(e, property.id)}
                />
              </div>
            ))}
          </div>

          <input type='submit' value='Editar' />
        </Form>
        {/* <Form onSubmit={handleSubmitProperty}>
          <label>nombre: </label>
          <input
            type='text'
            name='name'
            value={property.name}
            onChange={handleChangeProperty}
          />
          <label>descripcion:</label>
          <input
            type='text'
            name='value'
            value={property.value}
            onChange={handleChangeProperty}
          />
          <input type='submit' value='agregar' />
        </Form> */}
      </FormContainer>
    </div>
  );
};
