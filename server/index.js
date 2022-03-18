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
// const ProductService = require("./services");

const productsList = require("./jsonData/products");

app.use(express.static(publicPath));

app.get("/products", (req, res) => {
  res.send(productsList);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}!`);
});
