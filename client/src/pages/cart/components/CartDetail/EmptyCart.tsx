import { NavLink } from 'react-router-dom'
import { Back } from '../../styled-components/styles'
import cart from "../../styled-components/cart.png";

export const EmptyCart = () => {
  return (
    <div className="emptyCart">
    <img src={cart} alt='' />
    <div>
      <p>Tu carrito esta vacío</p>
      <NavLink to="/products">
        <Back>Comienza a comprar...</Back>
      </NavLink>
    </div>
  </div>
  )
}
