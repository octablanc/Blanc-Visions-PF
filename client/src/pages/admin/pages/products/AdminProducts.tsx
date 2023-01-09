import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import { useEffect } from 'react';
import {
  getProductByIdAdmin,
  getProductsAdmin,
} from '../../../../redux/slices/Admin/admin.thunk';
import { FaEdit } from 'react-icons/fa';
import { BiAddToQueue } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export const AdminProducts = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { paginationAdmin, products } = useAppSelector(
    state => state.adminState
  );
  const { page, quantity, data, order } = paginationAdmin;

  const handleCurrentProducts = async (id: any) => {
    await dispatch(getProductByIdAdmin(id));
    navigate(`/dashboard/products/edit/${id}`);
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
                <td>{product.state ? 'activo' : 'inactivo'}</td>
                <td>
                  <button onClick={() => handleCurrentProducts(product.id)}>
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};
