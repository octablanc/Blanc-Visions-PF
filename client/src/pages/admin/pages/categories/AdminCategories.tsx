import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import {
  getAllCategoriesAdmin,
  getCategoryByIdAdmin,
} from '../../../../redux/slices/Admin/admin.thunk';

import { useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { BiAddToQueue } from 'react-icons/bi';

export const AdminCategories = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { categories } = useAppSelector(state => state.adminState);
  useEffect(() => {
    dispatch(getAllCategoriesAdmin());
  }, [dispatch]);

  const handleCurrentCategory = async (id: any) => {
    await dispatch(getCategoryByIdAdmin(id));
    navigate(`/dashboard/categories/edit/${id}`);
  };

  return (
    <main className='main'>
      <button onClick={() => navigate('/dashboard/categories/create')}>
        <BiAddToQueue /> Crear Categoria
      </button>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {categories.length > 0 &&
            categories.map(category => (
              <tr>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>{category.state ? 'activo' : 'inactivo'}</td>
                <td>
                  <button onClick={() => handleCurrentCategory(category.id)}>
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
