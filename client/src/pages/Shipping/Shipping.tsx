import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//material ui
import {
  Button,
  Dialog,
  DialogContentText,
  DialogContent,
  DialogActions,
} from "@mui/material";
import TextField from "@mui/material/TextField";
//redux
import { postOrderBuy } from "../../services/services";
import { useAppSelector } from "../../redux/app/hooks";
import Email from "@mui/icons-material/Email";
//emailjs
import emailjs from "emailjs-com";
import { FlashMsg } from "../../components/FlashMsg/FlashMsg";
import userEvent from "@testing-library/user-event";
import { Checkout } from "../Checkout/Checkout";

// {cartTotalAmount,cartTotalQuantity,user,cartItems,discount,}

export const Shipping = () => {
  const [open, setOpen] = useState(true);
  const [order, setOrder] = useState({
    postalCode: "",
    street: "",
    height: "",
    city: "",
  });

  const [checkout, setCheckout] = useState(false);
  // const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { priceTotalCart, quantityTotalCart, cart } = useAppSelector(
    (state) => state.cartState
  );
  const { user } = useAppSelector((state) => state.userState);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | null>
  ) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  
 
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("order:", order);
    console.log("cart:", cart);
    console.log('user:', user);

  //   const orderItems = cart?.map((prod: any) => {  
  //     console.log(cart)
  //     return {     
  //     productId: prod.id,
  //     quantity: prod.cartQuantity,
  //     price: prod.price,
  //     }    
  // });  

    // const orderBuy = {
    //   priceTotalDiscount: priceTotalCart,      
    //   discount: 0, // HARDCODEO EL DISCOUNT PARA QUE NO SALTE ERROR
    //   state: true,
    //   postalCode: order.postalCode,
    //   street: order.street,
    //   height: order.height,
    //   city: order.city,
    //   quantityProducts: quantityTotalCart,
    //   dues: 1,
    //   userId: user?.id,
    //   buy: true,
    //   // productOrders: orderItems
    //   productOrders: [
    //         {
    //           productId: 1,
    //           quantity: 10,
    //           price: 5050,
    //         },
    //         {
    //           productId: 2,
    //           quantity: 10,
    //           price: 5050,
    //         },
    //       ],
    // };
   

    const orderBuy = {
      priceTotalDiscount: 12,
      discount: 0,
      state: true,
      postalCode: 122,
      street: order.street,
      height: "1234",
      city: "¿bs as s",
      quantityProducts: 123,
      dues: 1,
      userId: 1,
      buy: true,
      productOrders: [
        {
          productId: 1,
          quantity: 10,
          price: 5050,
        },
        {
          productId: 2,
          quantity: 10,
          price: 5050,
        },
      ],
    };


    //******* MAIL CON INFO DEL CARRITO*************//
    // const cartUser = cart?.map((el) => {
    //   return {        
    //     quantity: el.quantity,
    //     description: el.product.name,        
    //   };
    // });

    // console.log("cart:", cart);
    // // })
    // const preOrder = {      
    //   name: user?.name,
    //   mail: user?.mail, 
    //   total: priceTotalCart,
    //   quantity: quantityTotalCart,
    //   address: `${order.street} ${order.height}, ${order.city}`,
    // };
    // // mailConfirmation(): Promise<any>{
    // // { return new Promise((resolve, reject) => {
    // console.log("preOrder:", preOrder);

    // emailjs
    //   .send(
    //     "service_dpfn6c5",
    //     "template_4kkblqa",
    //     preOrder,
    //     "JYjoaKNcqXdcfIf3D"
    //   )
    //   .then(
    //     (response: any) => {
    //       console.log("SUCCESS!", response.status, response.text);
    //       setSuccess(true);
    //     },
    //     (err: any) => {
    //       console.log("FAILED...", err);
    //     }
    //   );
    // })

    postOrderBuy(orderBuy);
    setOrder({
      postalCode: "",
      street: "",
      height: "",
      city: "",
    });
    setCheckout(true);
    navigate("/checkout");
  };

  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {/* <DialogTitle id="form-dialog-title">Domicilio</DialogTitle> */}
        <DialogContent>
          <DialogContentText sx={{ width: "100%", fontSize: 18 }}>
            Completar los datos para envío a domicilio
          </DialogContentText>

          <TextField
            id="postalCode"
            label="Código Postal"
            type="text"
            variant="standard"
            name="postalCode"
            value={order.postalCode}
            fullWidth
            onChange={(e) => handleChange(e)}
            sx={{ width: "100%", fontSize: 18 }}
          />

          <TextField
            id="street"
            label="Calle"
            type="text"
            variant="standard"
            name="street"
            value={order.street}
            fullWidth
            onChange={(e) => handleChange(e)}
            sx={{ width: "100%", fontSize: 18 }}
          />

          <TextField
            id="height"
            label="Altura"
            type="text"
            variant="standard"
            name="height"
            value={order.height}
            fullWidth
            onChange={(e) => handleChange(e)}
            sx={{ width: "100%", fontSize: 18 }}
          />
          <TextField
            id="city"
            label="Ciudad"
            type="text"
            variant="standard"
            name="city"
            value={order.city}
            fullWidth
            onChange={(e) => handleChange(e)}
            sx={{ width: "100%", fontSize: 18 }}
          />
        </DialogContent>
        <DialogActions>
          <Button            
            onClick={handleSubmit}            
            color="primary"
            sx={{ width: "100%", fontSize: 12 }}
          >
            Continuar con la compra
          </Button>
          {/* {success && <FlashMsg></FlashMsg>}   */}
          {/* {checkout && <Checkout order={order}></Checkout>}       */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

// export const ShippingForm = ({
//   cartTotalAmount,
//   cartTotalQuantity,
//   itemTotalQuantity,
//   discount,
//   user,
//   cartItems,
// }: any) => {
//   const [open, setOpen] = useState(false);
//   const [order, setOrder] = useState({
//     postalCode: "",
//     street: "",
//     height: "",
//     city: "",
//   });
//   const [checkout, setCheckout] = useState(false);
//   const dispatch = useAppDispatch();

//   // useEffect(() => {
//   //   dispatch(getDiscountTotal(cartItems))
//   // }, [itemTotalQuantity, cartItems, dispatch])

//   const handleChange = (
//     e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | null>
//   ) => {
//     setOrder({
//       ...order,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

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
//     // setCheckout(true);
//   };

//   const handleClick = () => {
//     setOpen(false);
//   };

//   return (
//     <Container>
//       <div>
//         <Grid container>
//           <Grid item md={20}>
//             <FormControl>
//               <Input
//                 id="street"
//                 type="text"
//                 name="street"
//                 value={order.street}
//                 aria-describedby="calle-helper"
//                 onChange={(e) => handleChange(e)}
//               ></Input>
//               <FormHelperText id="calle-helper">
//                 Ingresá la calle
//               </FormHelperText>
//             </FormControl>
//           </Grid>
//           <Grid item md={10}>
//             <FormControl>
//               <Input
//                 id="height"
//                 type="text"
//                 name="height"
//                 value={order.height}
//                 aria-describedby="height-helper"
//                 onChange={(e) => handleChange(e)}
//               ></Input>
//               <FormHelperText id="height-helper">
//                 Ingresa la altura
//               </FormHelperText>
//             </FormControl>
//           </Grid>
//           <Grid item md={10}>
//             <FormControl>
//               <Input
//                 id="city"
//                 type="text"
//                 name="city"
//                 value={order.city}
//                 aria-describedby="city-helper"
//                 onChange={(e) => handleChange(e)}
//               ></Input>
//               <FormHelperText id="city-helper">
//                 Ingresa la ciudad
//               </FormHelperText>
//             </FormControl>
//           </Grid>
//           <Grid item md={10}>
//             <FormControl>
//               <Input
//                 id="postalCode"
//                 type="text"
//                 name="postalCode"
//                 value={order.city}
//                 aria-describedby="postalCode-helper"
//                 onChange={(e) => handleChange(e)}
//               ></Input>
//               <FormHelperText id="postalCode-helper">
//                 Ingresa el código Postal
//               </FormHelperText>
//             </FormControl>
//           </Grid>
//           <Button onClick={handleSubmit} variant="contained" color="primary">
//             Confirmar datos
//           </Button>
//         </Grid>
//       </div>
//       {/* <div>
//         <CartItems />
//       </div> */}
//       {/* <div>
//         <h3>Total:{cartTotalAmount}</h3>
//         <Checkout />
//       </div> */}
//       {/* <CartProducts /> */}
//     </Container>
//   );
// };
