import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../reducers/productsReducer";
import { RootState } from "../../state";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import "./style.css";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsList = useSelector((state: RootState) => state.products.productsList);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleRedirect = (id: number) => {
    navigate(`/products/${id}`);
  };

  const renderProducts = () => {
    return productsList.map((item, index) => (
      <Col key={index} xs={12} md={4} lg={3} style={{ margin: "5px 0" }}>
        <Card
          className="card-item"
          onClick={() => {
            handleRedirect(item.id);
          }}
        >
          <Card.Body>
            <Card.Img variant="top" src={item.image} height={"300px"} />
            <Card.Title>{item.title}</Card.Title>
            <b>
              <Card.Text>Price: € {item.price}</Card.Text>
            </b>
            <Button variant="primary" style={{ marginTop: "5px" }}>
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  if (productsList && productsList.length) {
    return (
      <Container>
        <Row>{renderProducts()}</Row>
      </Container>
    );
  }
  return <div>ProductsPage</div>;
};
export default ProductsPage;
