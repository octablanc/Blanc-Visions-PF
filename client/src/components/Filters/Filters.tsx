// import { useAppDispatch } from '../../redux/app/hooks';
// import { useEffect } from 'react';

export const Filters = () => {
  const handlePrice = () => {};

  return (
    <div>
      <h2>Refina tu busquedad</h2>
      <div>
        <p>
          ORDERNAR POR:
          <select>
            <option> Menor Precio</option>
            <option> Mayor Precio</option>
            <option> Mayor Descuento</option>
          </select>
        </p>
      </div>
      <div>
        <h3>DESCUENTOS</h3>
        <span>Desde 20% OFF</span>
        <span>Desde 30% OFF</span>

        <h3>PRECIO</h3>
        <span onClick={handlePrice}>Menos de $50.000</span>
        <span>$50.000 a $95.000</span>
        <span>$100.000 en adelante</span>

        <h3>FORMAS DE PAGO</h3>
        <span> 3 cuotas sin interes </span>
        <span> 6 cuotas sin interes </span>
      </div>
    </div>
  );
};
