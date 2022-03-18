export type ActionType = {
  payload: any;
};

export type ProductObject = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: 3.9;
    count: 120;
  };
};

export interface ProductsInterface {
  productsList: ProductObject[];
  productDetails: ProductObject;
}

export interface CartInterface {
  items: [];
}

export interface RootState {
  products: ProductsInterface;
  cart: CartInterface;
}
