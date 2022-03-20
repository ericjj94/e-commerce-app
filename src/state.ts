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

export type CartObject = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  rating: {
    rate: 3.9;
    count: 120;
  };
};

export interface ProductsInterface {
  productsList: ProductObject[];
  productDetails: ProductObject;
}

export interface OrderObject {
  orderId: number;
  cartItems: CartObject[];
  email: string;
  orderDate: string;
}

export interface CartInterface {
  items: [];
  orderPlaced: boolean;
  orderDetails: OrderObject;
}

export interface RootState {
  products: ProductsInterface;
  cart: CartInterface;
}
