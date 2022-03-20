import productReducer, { setProductDetails, setProducts } from "./productsReducer";

const item = {
  category: "tshirt",
  description: "Some random description",
  id: 1,
  image: "some_image.jpg",
  price: 123,
  rating: { count: 120, rate: 3 },
  title: "Hello World",
};

describe("productReducer testing", () => {
  it("should return the initial state of the productReducer", () => {
    expect(productReducer(undefined, { type: "" })).toEqual({
      productDetails: {},
      productsList: [],
    });
  });
  it("should set the productList", () => {
    expect(productReducer(undefined, setProducts(item)).productsList).toEqual(item);
  });
  it("should set the productList", () => {
    expect(productReducer(undefined, setProductDetails(item)).productDetails).toEqual(item);
  });
});
