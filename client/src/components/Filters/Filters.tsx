export const Filters = () => {
  return (
    <div>
      <h2>Refina tu busqueda</h2>
      <div>
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
