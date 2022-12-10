export interface Pro {
    map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
    name: string;
    code: number;
    description: string[];
    cuotes: number;
    image: string;
    price: number;
    entrega: string;
    stock: string;
    id_category: number;
    state: Boolean;
    features: string[];
  }