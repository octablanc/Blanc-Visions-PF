import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { updateUser } from '../../../redux/slices/products';
import { useState } from 'react';
export const Profile = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.productsState);

  const {
    id,
    imageProfile,
    name,
    lastName,
    phone,
    mail,
    password,
    userName,
    birthday,
  } = user;
  const [userForm, setUserForm] = useState({
    id,
    imageProfile,
    name,
    lastName,
    phone,
    mail,
    password,
    userName,
    birthday,
    state: true,
    roleId: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value, name } = e.target;

    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const handleSub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUser(userForm));
  };
  return (
    <div>
      <form onSubmit={handleSub}>
        <div>
          {/* <img src={imageProfile} alt='es demasiado' /> */}
          <input 
            onChange={handleChange}
            type='textarea'
            value={userForm.imageProfile}
            name='imageProfile'
          />
          <hr />
          <label>Nombre: </label>
          <input
            type='text'
            value={userForm.name}
            name='name'
            onChange={handleChange}
          />
          <hr />
          <label>Apellido: </label>
          <input
            type='text'
            value={userForm.lastName}
            name='lastName'
            onChange={handleChange}
          />
          <hr />

          <label>Telefono: </label>
          <input
            type='number'
            value={userForm.phone}
            name='phone'
            onChange={handleChange}
          />
          <hr />

          <label>E-mail </label>
          <input type='text' value={userForm.mail} name='mail' disabled />
          <hr />

          <label>Contraseña </label>
          <input
            type='password'
            name='password'
            value={userForm.password}
            onChange={handleChange}
            disabled
          />
          <hr />

          <label>Nombre de usuario: </label>
          <input
            type='text'
            name='userName'
            value={userForm.userName}
            onChange={handleChange}
            disabled
          />
          <hr />
          <label>Fecha de Nacimiento: </label>
          <input
            type='date'
            name='birthday'
            value={userForm.birthday}
            onChange={handleChange}
            disabled
          />
          <hr />
          <input type="submit"/>
          
        </div>
      </form>
    </div>
  );
};

