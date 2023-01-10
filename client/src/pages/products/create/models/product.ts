import { Property } from "./properties.model";

export interface Product {
  code: string;
  name: string;
  price: string;
  image: string;
  stock: string;
  description: string;
  categoryId: string;
  state: true;
  discount: string;
  images: any;
  properties: Property[];
}
