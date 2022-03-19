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

module.exports = {
  getProducts,
  getProductDetails,
  searchForProducts,
};
