import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import {
  getUserIdAdmin,
  getUsersAdmin,
} from '../../../../redux/slices/Admin/admin.thunk';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';

export const AdminUsers = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { users } = useAppSelector(state => state.adminState);

  const handleCurrentUser = async (id: any) => {
    await dispatch(getUserIdAdmin(id));
    navigate(`/dashboard/users/edit/${id}`);
  };
  useEffect(() => {
    dispatch(getUsersAdmin());
  }, [dispatch]);

  return (
    <main className='main'>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>telefono</th>
            <th>E-Mail</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 &&
            users.map(user => (
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
        </tbody>
      </table>
    </main>
  );
};
