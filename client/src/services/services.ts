import axios from "axios";

export interface ProductOrderIfc {
    productId: number
    quantity: number
    price: number
  }
  
  export interface OrderBuyIfc {
    priceTotalDiscount: number
    discount: number
    state: boolean
    postalCode: number
    street: string
    height: string
    city: string
    dues: number
    buy: boolean
    userId: number
    productOrders: Array<ProductOrderIfc>
  }

export async function postUser(user: object){
    try {
        await axios.post('https://blanc-visions-pf-kingcomm.up.railway.app/users', user);
    } catch (error) {
        console.log(error);
    }
}

export async function updateUser(user: object, id: Number | undefined) {
    try {
        await axios.put('https://blanc-visions-pf-kingcomm.up.railway.app/users/' + id, user);
    } catch ({message}) {
        console.log(message);
    }
}

export async function postOrderBuy(orderBuy: Object) {
    try {
        await axios.post('https://blanc-visions-pf-kingcomm.up.railway.app/order-buy', orderBuy);
    } catch ({message}) {
        console.log(message);
    }
}

