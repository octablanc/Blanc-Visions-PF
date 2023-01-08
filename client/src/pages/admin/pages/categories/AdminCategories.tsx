import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import {
  getAllCategoriesAdmin,
  getCategoryByIdAdmin,
} from '../../../../redux/slices/Admin/admin.thunk';

// import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { BiAddToQueue } from 'react-icons/bi';
// import { columnsCategories } from '../../helpers';

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
    <div>
      {/* <div style={{ height: 400, width: '100%' }}> */}
      <button onClick={() => navigate('/dashboard/categories/create')}>
        <BiAddToQueue /> Crear Categoria
      </button>
      <table>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>

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
      </table>
      {/* //   <DataGrid
        //     rows={categories}
        //     columns={columnsCategories}
        //     pageSize={5}
        //     rowsPerPageOptions={[5]}
        //   /> */}
    </div>
    // </div>
  );
};
