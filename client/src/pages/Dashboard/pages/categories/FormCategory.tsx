import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import {
  createNewCategory,
  updateCategory,
} from '../../../../redux/slices/Admin/admin.thunk';
import { useEffect } from 'react';
import Spinner from '../../../../components/Spinner/Spinner';

export const FormCategory = () => {
  const { categoryId } = useAppSelector((state) => state.adminState);
  const [form, setForm] = useState({
    name: '',
    description: '',
    state: 'active',
  });

  const { name, description, state } = form;
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (id) {
      dispatch(
        updateCategory(+id, {
          name,
          description,
          state: state === 'active' ? true : false,
        })
      );
    } else {
      dispatch(
        createNewCategory({
          name,
          description,
          state: state === 'active' ? true : false,
        })
      );
    }
    navigate(-1);
  };

  useEffect(() => {
    // const getCategory = async () => {
    if (id) {
      setForm({
        name: categoryId.name,
        description: categoryId.description,
        state: categoryId.state ? 'active' : 'inactive',
      });
    }
    // if (Object.keys(categoryId).length > 0) {
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type='text' name='name' value={name} onChange={handleChange} />
      </div>

      <div>
        <label>Description</label>
        <input
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Estado</label>
        <select name='state' onChange={handleChange} value={state}>
          <option value='active'>Activo</option>
          <option value='inactive'>Inactivo</option>
        </select>
      </div>
      <input type='submit' value='enviar' />
    </form>
  );
};
