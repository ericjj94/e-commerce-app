const productsList = require("../jsonData/products");

function getProducts(req, res) {
  return productsList;
}

function getProductDetails(id) {
  const result = productsList.find((item) => item.id === id);
  return result;
}
module.exports = {
  getProducts,
  getProductDetails,
};
