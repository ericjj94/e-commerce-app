import cartReducer, { addItemsToCart, removeItemsFromCart } from "./cartReducer";

const item = {
  id: 1,
  title: "Hello World",
  price: 123,
  description: "Some random description",
  category: "tshirt",
  image: "some_image.jpg",
  rating: {
    rate: 3,
    count: 120,
  },
};

const cart = [
  {
    id: 1,
    title: "Hello World",
    price: 123,
    description: "Some random description",
    category: "tshirt",
    image: "some_image.jpg",
    rating: { rate: 3, count: 120 },
    quantity: 1,
  },
];

describe("cartReducer testing", () => {
  it("should return the initial state of the cartReducer", () => {
    expect(cartReducer(undefined, { type: "" })).toEqual({
      items: [],
      orderDetails: {},
      orderPlaced: false,
    });
  });

  it("should add items to the redux", () => {
    expect(cartReducer(undefined, addItemsToCart(item)).items).toEqual(cart);
  });
});
