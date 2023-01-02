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
        await axios.post('http://localhost:3001/users', user);
    } catch (error) {
        console.log(error);
    }
}

export async function updateUser(user: object, id: Number | undefined) {
    try {
        await axios.put('http://localhost:3001/users/' + id, user);
    } catch ({message}) {
        console.log(message);
    }
}

export async function postOrderBuy(orderBuy: Object) {
    try {
        await axios.post('http://localhost:3001/order-buy', orderBuy);
    } catch ({message}) {
        console.log(message);
    }
}

