export interface Pro {
  map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
  name: string;
  code: string;
  description: string;
  image: string;
  price: number;
  entrega: string;
  stock: number;
  id_category: number;
  state: Boolean;
}

export interface Categ {
  name: string;
  value: string;
}
