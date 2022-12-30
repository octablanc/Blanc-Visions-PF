import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/app/hooks';
import { setCategory } from '../../redux/slices/categories';
import { useNavigate } from 'react-router-dom';

export const FilterCategory = () => {
  const { categories } = useAppSelector((state) => state.categoriesState);
  const dispatch = useDispatch();
    const navigate = useNavigate();
    
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value: string | undefined = e.target.value;
    dispatch(setCategory(value));
    navigate('/products');
    };
    
  return (
    <div>
      <form>
        <select onChange={handleChange} id="selectCategory">
          <option value="">Todas las Categorias</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};
