import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { useEffect } from 'react';
import { getAllCategories, getAllPage, getAllProducts, getProductsPage, setPaginationCategory } from '../../redux/slices/products';

export const Filters = () => {
  const { categories, pagination } = useAppSelector((state) => state.productsState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
 
  const filterByCategories = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    console.log("VALOR",value)
    dispatch(setPaginationCategory(value));
    console.log("CAT",pagination.category)
    
    dispatch(getProductsPage(pagination.page, pagination.quantity, value));
    dispatch(getAllPage());
  }

  return (
    <div>
      <h2>Refina tu busqueda</h2>
      <div>
        <select onChange={filterByCategories}>
          <option>buscar categoria</option>
          {categories.map((category) => (
            <option key={category.id}>{category.name}</option>
          ))}
        </select>
        <div>
          <input type='checkbox' />
          <span>Ofertas</span>
        </div>
        <div>
          <input type='checkbox' id='vendidos' />
          <span>Mas vendidos</span>
        </div>
        <select>
          <option>Mayor precio</option>
          <option>Menor Precio</option>
        </select>
      </div>
    </div>
  );
};
