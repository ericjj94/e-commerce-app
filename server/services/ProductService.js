const productsList = require("../jsonData/products");

const getProducts = (req, res) => {
  res.send(productsList);
};
module.exports = {
  getProducts,
};
