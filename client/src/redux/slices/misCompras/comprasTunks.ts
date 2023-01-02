import { allBuy } from './buySlice';
import axios from 'axios';

export const getAllBuy = (id: number) => {
  return async (dispatch: any) => {
    try {
      let { ordenBuyUser } = (
        await axios(`https://blanc-visions-pf-kingcomm.up.railway.app/order-buy/user/${id}`)
      ).data;
      dispatch(allBuy(ordenBuyUser));
    } catch ({ message }) {
      console.log(message);
    }
  };
};
