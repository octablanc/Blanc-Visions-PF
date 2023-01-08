
import { BtnCheck } from '../../cart/styled-components/styles'

export const Checkout = ({cartTotalQuantity, cartTotalAmount, handleSubmit}: any) => {
  return (
    <form
    action="https://blanc-visions-pf-kingcomm.up.railway.app/checkout"
    method="POST"
  >
    <input
      type="hidden"
      name="title"
      value={`Productos (${cartTotalQuantity})`}
    />
    <input type="hidden" name="price" value={cartTotalAmount} />
    <BtnCheck type="submit" onClick={handleSubmit}>
      {" "}
      Finalizar compra
    </BtnCheck>
  </form>
  )
}
