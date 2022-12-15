import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { useState } from 'react';
export const Profile = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.productsState);
  const [formUser, setFormUser] = useState({
    id: 0,
    imageProfile: '',
    name: '',
    lastName: '',
    phone: 0,
    mail: '',
    password: '',
    userName: '',
    birthday: '',
    state: true,
    roleId: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
  };

  return (
    <div>
      <form>
        <div>
          <h1>imagen</h1>
          <label>Nombre: </label>
          <input type='text' value={user.name} onChange={handleChange} />
          <hr />
          <label>Apellido: </label>
          <input type='text' value={user.lastName} onChange={handleChange} />
          <hr />

          <label>Telefono: </label>
          <input type='number' value={user.phone} onChange={handleChange} />
          <hr />

          <label>E-mail </label>
          <input type='text' defaultValue={'flor@gmail'} disabled />
          <hr />

          <label>Contraseña </label>
          <input
            type='password'
            value='jfsjdn'
            onChange={handleChange}
            disabled
          />
          <hr />

          <label>Nombre de usuario: </label>
          <input type='text' value={user.userName} onChange={handleChange} />
          <hr />
        </div>
      </form>
    </div>
  );
};
