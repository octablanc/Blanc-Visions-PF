// let arr: string[] = [
//   'Accesorios para Cámaras',
//   'Albumes y Portarretratos',
//   'Cables',
//   'Cámaras',
//   'Drones y Accesorios',
//   'Filmadoras y Cámaras de Acción',
//   'Instrumentos Ópticos',
//   'Lentes y Filtros',
//   'Repuestos para Cámaras',
//   'Revelado y Laboratorio',
// ];

export const Filters = () => {
  return (
    <div className='filter'>
      <h2>Refina tu busqueda</h2>
      <div className='conteinerOp'>
        {/* <select>
          <option>Categories</option>
          {arr.map((e) => (
            <option>{e}</option>
          ))}
        </select> */}
        <button className='btnFilter'>ofertas</button>
        <button className='btnFilter'>Mas vendidos</button>
        <select className='btnFilter'>
          <option>Mayor precio</option>
          <option>Menor Precio</option>
        </select>
      </div>
    </div>
  );
};
