import { allBuy } from './buySlice';
import axios from 'axios';



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

