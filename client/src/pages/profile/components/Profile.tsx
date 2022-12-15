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
  
  const [alertMessage, setAlertMessage] = useState({
    name: '',
    lastName: '',
    phone: '',
  });

  const validationFormUser = () => {
    const exp = /[0-9]+/gi;
    const exp2 = /(\W|_)+\s(\W)+/gi;
    // const err = {}

    if (exp.test(userForm.name) || exp2.test(userForm.name)) {
      console.log("Name invalid");
      alert("nombre invalido")
      return 1;
    }
    if (exp.test(userForm.lastName) || exp2.test(userForm.lastName)) {
      console.log("LastName invalid");
      return 1;
    }
    if (typeof userForm.phone !== 'number' && isNaN(userForm.phone) ) {
      console.log("Phone invalid");
      return 1;
    }
    return 0;
  }



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value, name } = e.target;
    if (name === 'phone' && value.length > 10) return 0;
    if (name === 'name' && value.length > 28) return 0;
    if(name === 'lastName' && value.length > 25) return 0;
    setUserForm({ ...userForm, [name]: value, });
  };

  const handleSub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validationFormUser()) return 0;
    dispatch(updateUser(userForm));
  };

  const focusInput = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const { name } = e.target
    if (name === 'name' || name === 'lastName') return setAlertMessage({ ...alertMessage, [name]: 'solo Letras' })
    setAlertMessage({...alertMessage, [name]: 'solo Numeros'})
  }

  const onBlurInput = (e: React.FocusEvent<HTMLInputElement, Element>) => setAlertMessage({ ...alertMessage, [e.target.name]: '' })

  return (
    <div>
      <form onSubmit={handleSub}>
        <div>
          <img src={imageProfile} alt='photo profile' />
          <input
            onChange={handleChange}
            type='textarea'
            value={userForm.imageProfile}
            name='imageProfile'
          />
          <hr />
          <label>Nombre: </label>
          <input
            onChange={handleChange}
            onFocus={focusInput}
            onBlur={onBlurInput}
            value={userForm.name}
            type='text'
            name='name'
            tabIndex={1}
          />
          <p>{alertMessage.name}</p>
          <hr />
          <label>Apellido: </label>
          <input
            onChange={handleChange}
            onFocus={focusInput}
            onBlur={onBlurInput}
            value={userForm.lastName}
            type='text'
            name='lastName'
            tabIndex={2}
          />
          <p>{alertMessage.lastName}</p>

          <hr />

          <label>Telefono: </label>
          <input
            onChange={handleChange}
            onFocus={focusInput}
            onBlur={onBlurInput}
            value={userForm.phone}
            type='number'
            name='phone'
            tabIndex={3}
          />
          <p>{alertMessage.phone}</p>

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

