import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import {
  deleteUser,
  // getUserIdAdmin,
  getUsersAdmin,
  retrieveUserAdmin,
} from '../../../../redux/slices/Admin/admin.thunk';
// import { useNavigate } from 'react-router-dom';
// import { FaEdit } from 'react-icons/fa';

export const AdminUsers = () => {
  // const [stateUser, setStateUser] = useState(true);
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const { users } = useAppSelector((state) => state.adminState);

  const handleState = async (user: any) => {
    if (user.state) {
      await dispatch(deleteUser(user.id));
    } else {
      await dispatch(retrieveUserAdmin(user.id));
    }
    dispatch(getUsersAdmin());

    //FALTA ACTUALIZAR LA PAGINA
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
          </tr>
        </thead>

        <tbody>
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
                <td>
                  <button onClick={() => handleState(user)}>
                    {user.state ? 'activo' : 'inactivo'}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};
