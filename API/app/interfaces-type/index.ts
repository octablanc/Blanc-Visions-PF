import { Response, Request } from 'express';

export type TypeFunctionExp = (
  req: Request,
  res: Response
) => Promise<Response>;

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

export interface RatingIfc {
  score: number;
  commentary: string;
  productId: number;
  userId: number;
}
