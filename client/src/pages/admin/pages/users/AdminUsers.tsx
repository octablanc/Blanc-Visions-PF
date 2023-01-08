import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import {
  getUserIdAdmin,
  getUsersAdmin,
} from '../../../../redux/slices/Admin/admin.thunk';
import { useNavigate } from 'react-router-dom';

// import { DataGrid } from '@mui/x-data-grid';
// import Spinner from '../../../../components/Spinner/Spinner';
import { BiAddToQueue } from 'react-icons/bi';
import { FaEdit } from 'react-icons/fa';
import styled from 'styled-components';
// import { columnsUsers } from '../../helpers';
const UsersMain = styled.div`
  width: 100%;
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
`;

export const AdminUsers = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { users, loading } = useAppSelector((state) => state.adminState);

  const handleCurrentUser = async (id: any) => {
    await dispatch(getUserIdAdmin(id));
    navigate(`/dashboard/users/edit/${id}`);
  };
  useEffect(() => {
    dispatch(getUsersAdmin());
  }, [dispatch]);

  return (
    <UsersMain>
      <table>
        <tr>
          <th>Id</th>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>telefono</th>
          <th>E-Mail</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>

        {users.length > 0 &&
          users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>
                <img src={user.imageProfile} alt='img' />
              </td>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.phone}</td>
              <td>{user.mail}</td>
              <td>{user.state ? 'activo' : 'inactivo'}</td>
              <td>
                <button onClick={() => handleCurrentUser(user.id)}>
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
      </table>
      {/* <div style={{ height: 400, width: '100%' }}>
        {loading ? (
          <Spinner />
        ) : (
          <DataGrid
            rows={users}
            columns={columnsUsers}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        )}
      </div> */}
    </UsersMain>
  );
};
