import axios from 'axios';

export interface ProductOrderIfc {
  productId: number;
  quantity: number;
  price: number;
}

export interface OrderBuyIfc {
  priceTotalDiscount: number;
  discount: number;
  state: boolean;
  postalCode: number;
  street: string;
  height: string;
  city: string;
  dues: number;
  buy: boolean;
  userId: number;
  productOrders: Array<ProductOrderIfc>;
}

interface RatingIfc {
  commentary: string;
  score: number;
  productId: number;
  userId: number | undefined | null;
}

export async function postUser(user: object) {
  try {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users`, user);
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(user: object, id: Number | undefined) {
  try {
    await axios.put(`${process.env.REACT_APP_BACKEND_URL}/users/` + id, user);
  } catch ({ message }) {
    console.log(message);
  }
}

export async function postOrderBuy(orderBuy: Object) {
  try {
    await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/order-buy`,
      orderBuy
    );
  } catch ({ message }) {
    console.log(message);
  }
}

export const postRating = async ({
  score,
  commentary,
  productId,
  userId,
}: RatingIfc) => {
  try {
    // const ratingCreate = (
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/ratings`, {
        score,
        commentary,
        productId,
        userId,
      })
    // ).data;
  } catch ({ message }) {
    console.log(message);
  }
};
