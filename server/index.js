const express = require("express");
const app = express();

const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const publicPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { productService } = require("./services");

const productsList = require("./jsonData/products");

app.use(express.static(publicPath));

app.get("/products", (req, res) => {
  return res.send(productService.getProducts());
});

app.get("/product_details", (req, res) => {
  const id = Number(req.query.id);
  res.send(productService.getProductDetails(id));
});

app.listen(port, () => {
  console.log(`Server is running on ${port}!`);
});
