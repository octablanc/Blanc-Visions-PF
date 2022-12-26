const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// SDK de Mercado Pago
const mercadopago = require("mercadopago");

//middleware

app.use(bodyParser.urlencoded({ extended: false }));

// Agrega credenciales. Este token es del vendedor a donde llegaran los pagos
mercadopago.configure({
  access_token:
    "APP_USR-3248474346383256-121911-3cd56dfa5c4fdc916795b79a085dd93c-1266633934",
});

//routes
app.post("/checkout", (req, res) => {
  // Crea un objeto de preferencia, "Orden de compra"
  let preference = {
    items: [
      {
        title: req.body.title,
        quantity: 1,
        //picture_url: req.body.url,
        currency_id: "ARS",
        unit_price: parseInt(req.body.price),
      },
    ],
    back_urls: {
      success: "http://localhost:3000/",
      failure: "http://localhost:3000/",
      pending: "http://localhost:3000/",
    },
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      //la respuesta trae un objeto con la url especificada en init_point
      console.log(response);
      //res.json(response);
      res.redirect(response.body.init_point);
    })
    .catch(function (error) {
      console.log(error);
    });
});

//server

app.listen(3002, () => {
  console.log("Server on port 3002");
});
