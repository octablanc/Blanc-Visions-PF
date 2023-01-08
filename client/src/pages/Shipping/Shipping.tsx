import React, { useEffect, useState } from "react";

//material ui
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Slide,
  SlideProps,
} from "@mui/material";
import TextField from "@mui/material/TextField";

import { postOrderBuy } from "../../services/services";
import { Checkout } from "./Components/Checkout";
import { BtnCheck } from "../cart/styled-components/styles";
import { CartProducts } from "./Components/CartItems";
import { Container } from "./Components/styled-components/Shipping";
import { useAppDispatch } from "../../redux/app/hooks";
import { getDiscountTotal } from "../../redux/slices/Cart";

const Transition = React.forwardRef<JSX.Element, SlideProps>(
  function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

// export const Shipping = ({
//   cartTotalAmount,
//   cartTotalQuantity,
//   user,
//   cartItems,
//   discount,
// }: any) => {
//   const [open, setOpen] = useState(true);
//   const [order, setOrder] = useState({
//     postalCode: "",
//     street: "",
//     height: "",
//     city: "",
//   });
//   const [checkout, setCheckout] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | null>
//   ) => {
//     setOrder({
//       ...order,
//       [e.target.name]: e.target.value,
//     });
//   };
//   // const handleClickOpen = () => {
//   //   setOpen(true);
//   // };

//   const handleClose = (reason: any) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setOpen(false);
//   };

//   const handleHidden = () => {};

//   // const handleClose = () => {
//   //   setOpen(false);
//   // };

//   //capturar el orderBuy (llega a mercado libre) y lo posteamos en productOrder

//   const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     console.log(order);
//     const orderBuy = {
//       priceTotalDiscount: cartTotalAmount,
//       discount: discount,
//       state: true,
//       postalCode: order.postalCode,
//       street: order.street,
//       height: order.height,
//       city: order.city,
//       quantityProducts: cartTotalQuantity,
//       dues: 1,
//       userId: user?.id,
//       buy: true,
//       productOrders: cartItems?.map((prod: any) => {
//         return {
//           productId: prod.id,
//           quantity: prod.cartQuantity,
//           price: prod.price,
//         };
//       }),
//     };
//     // postOrderBuy(orderBuy);
//     setOrder({
//       postalCode: "",
//       street: "",
//       height: "",
//       city: "",
//     });
//     setCheckout(true);
//   };

//   const handleClick = () => {
//     console.log("handleClick");
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Dialog
//         open={open}
//         keepMounted
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//       >
//         {/* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */}
//         <DialogContent>
//           <DialogContentText>
//             Completar los datos para envío a domicilio
//           </DialogContentText>

//           <TextField
//             id="postalCode"
//             label="Código Postal"
//             type="text"
//             variant="standard"
//             name="postalCode"
//             value={order.postalCode}
//             fullWidth
//             onChange={(e) => handleChange(e)}
//           />

//           <TextField
//             id="street"
//             label="Calle"
//             type="text"
//             variant="standard"
//             name="street"
//             value={order.street}
//             fullWidth
//             onChange={(e) => handleChange(e)}
//           />

//           <TextField
//             id="height"
//             label="Altura"
//             type="text"
//             variant="standard"
//             name="height"
//             value={order.height}
//             fullWidth
//             onChange={(e) => handleChange(e)}
//           />
//           <TextField
//             id="city"
//             label="Ciudad"
//             type="text"
//             variant="standard"
//             name="city"
//             value={order.city}
//             fullWidth
//             onChange={(e) => handleChange(e)}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleSubmit} color="primary">
//             Confirmar datos
//           </Button>

//           <form
//             action="https://blanc-visions-pf-kingcomm.up.railway.app/checkout"
//             method="POST"
//           >
//             <input
//               type="hidden"
//               name="title"
//               value={`Productos (${cartTotalQuantity})`}
//             />
//             <input type="hidden" name="price" value={cartTotalAmount} />
//             <Button color="primary">Continuar con el pago</Button>
//           </form>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

export const ShippingForm = ({
  cartTotalAmount,
  cartTotalQuantity,
  itemTotalQuantity,  
  discount,
  user,
  cartItems,
}: any) => {
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState({
    postalCode: "",
    street: "",
    height: "",
    city: "",
  });
  const [checkout, setCheckout] = useState(false);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getDiscountTotal(cartItems))
  // }, [itemTotalQuantity, cartItems, dispatch])

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | null>
  ) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  //capturar el orderBuy (llega a mercado libre) y lo posteamos en productOrder

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(order);
    const orderBuy = {
      priceTotalDiscount: cartTotalAmount,
      discount: discount,
      state: true,
      postalCode: order.postalCode,
      street: order.street,
      height: order.height,
      city: order.city,
      quantityProducts: cartTotalQuantity,
      dues: 1,
      userId: user?.id,
      buy: true,
      productOrders: cartItems?.map((prod: any) => {
        return {
          productId: prod.id,
          quantity: prod.cartQuantity,
          price: prod.price,
        };
      }),
    };
    // postOrderBuy(orderBuy);
    setOrder({
      postalCode: "",
      street: "",
      height: "",
      city: "",
    });
    // setCheckout(true);
  };

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Container>
      <div>
        <Grid container>
          <Grid item md={20}>
            <FormControl>
              <Input
                id="street"
                type="text"
                name="street"
                value={order.street}
                aria-describedby="calle-helper"
                onChange={(e) => handleChange(e)}
              ></Input>
              <FormHelperText id="calle-helper">
                Ingresá la calle
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item md={10}>
            <FormControl>
              <Input
                id="height"
                type="text"
                name="height"
                value={order.height}
                aria-describedby="height-helper"
                onChange={(e) => handleChange(e)}
              ></Input>
              <FormHelperText id="height-helper">
                Ingresa la altura
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item md={10}>
            <FormControl>
              <Input
                id="city"
                type="text"
                name="city"
                value={order.city}
                aria-describedby="city-helper"
                onChange={(e) => handleChange(e)}
              ></Input>
              <FormHelperText id="city-helper">
                Ingresa la ciudad
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item md={10}>
            <FormControl>
              <Input
                id="postalCode"
                type="text"
                name="postalCode"
                value={order.city}
                aria-describedby="postalCode-helper"
                onChange={(e) => handleChange(e)}
              ></Input>
              <FormHelperText id="postalCode-helper">
                Ingresa el código Postal
              </FormHelperText>
            </FormControl>
          </Grid>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Confirmar datos
          </Button>
        </Grid>
      </div>
      {/* <div>
        <CartItems />
      </div> */}
      {/* <div> 
        <h3>Total:{cartTotalAmount}</h3>    
        <Checkout />
      </div> */}
      <CartProducts />
    </Container>
  );
};
