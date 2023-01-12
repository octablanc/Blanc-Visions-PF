import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import { useEffect } from 'react';
import {
  deleteProductAdmin,
  getProductByIdAdmin,
  getProductsAdmin,
  retrieveProductAdmin,
} from '../../../../redux/slices/Admin/admin.thunk';
import { FaEdit } from 'react-icons/fa';
import { BiAddToQueue } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { PaginateAdmin } from '../../styled-components/styles';
import { SearchProduct } from './SearchProduct';
export const AdminProducts = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { paginationAdmin, products } = useAppSelector(
    state => state.adminState
  );
  const { page, quantity, data, order, productsLength } = paginationAdmin;

  const handleCurrentProducts = async (id: any) => {
    await dispatch(getProductByIdAdmin(+id));
    navigate(`/dashboard/products/edit/${id}`);
  };
  const increment = () => {
    if (Math.ceil(productsLength / quantity) > page) {
      dispatch(getProductsAdmin(page + 1, quantity, data, order));
    }
  };
  const decrement = () => {
    if (page > 1) {
      dispatch(getProductsAdmin(page - 1, quantity, data, order));
    }
  };

  const handleState = async (product: any) => {
    if (product.state) {
      // await dispatch(deleteUser(user.id));
      await dispatch(deleteProductAdmin(product.id));
    } else {
      await dispatch(retrieveProductAdmin(product.id));
    }
    dispatch(getProductsAdmin(page, quantity, data, order));

    //FALTA ACTUALIZAR LA PAGINA
  };

  useEffect(() => {
    dispatch(getProductsAdmin(page, quantity, data, order));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <main className='main'>
      <button onClick={() => navigate('/dashboard/products/create')}>
        <BiAddToQueue /> Crear Producto
      </button>
      <SearchProduct />
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Codigo</th>
            <th>Stock</th>
            <th>Descuento</th>
            <th>Precio</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 &&
            products.map(product => (
              <tr>
                <td>{product.id}</td>
                <td>
                  <img src={product.image} alt='product img' />
                </td>
                <td>{product.name}</td>
                <td>{product.code}</td>
                <td>{product.stock}</td>
                <td>{product.discount}</td>
                <td>{product.price}</td>
                {/* <td>{product.state ? 'activo' : 'inactivo'}</td> */}
                <td>
                  <button onClick={() => handleState(product)}>
                    {product.state ? 'activo' : 'inactivo'}
                  </button>
                </td>
                <td>
                  <button onClick={() => handleCurrentProducts(product.id)}>
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {products.length > 0 && (
        <PaginateAdmin className='animate__animated animate__fadeIn'>
          <button onClick={decrement} disabled={page === 1}>
            {'<'}
          </button>
          {Math.ceil(productsLength / quantity) && <h3>{page}</h3>}
          <button
            onClick={increment}
            disabled={Math.ceil(productsLength / quantity) === page}
          >
            {'>'}{' '}
          </button>
        </PaginateAdmin>
      )}
    </main>
  );
};
