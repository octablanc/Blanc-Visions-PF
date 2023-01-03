import { allBuy } from './buySlice';
import axios from 'axios';

interface RatingIfc {
  commentary: string;
  score: number;
  productId: number;
}

export const getAllBuy = (id: number) => {
  return async (dispatch: any) => {
    if (id) {
      try {
        let { ordenBuyUser } = (
          await axios(
            `${process.env.REACT_APP_BACKEND_URL}/order-buy/user/${id}`
          )
        ).data;
        dispatch(allBuy(ordenBuyUser));
      } catch ({ message }) {
        console.log(message);
      }
    }
  };
};

export const postRating = ({ score, commentary, productId }: RatingIfc) => {
  return async (dispatch: any) => {
    try {
      const ratingCreate = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}}/ratings`
      );
      console.log({ ratingCreate });
    } catch ({ message }) {
      console.log(message);
    }
  };
};
