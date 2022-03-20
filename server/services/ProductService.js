const productsList = require("../jsonData/products");

function getProducts(req, res) {
  return productsList;
}

function getProductDetails(id) {
  const result = productsList.find((item) => item.id === id);
  return result;
}

function searchForProducts(searchText) {
  const results = productsList.filter((item) =>
    Object.values(item).some((val) => String(val).toLowerCase().includes(searchText.toLowerCase()))
  );
  return results;
}

function placeOrder(payload) {
  if (payload.email) {
    // the orderId should be a dynamic id (uuid/order-id)
    return {
      orderId: 1, // should be dynamic
      cartItems: payload.cartItems,
      email: payload.email,
      orderDate: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    };
  }
}

module.exports = {
  getProducts,
  getProductDetails,
  searchForProducts,
  placeOrder,
};
