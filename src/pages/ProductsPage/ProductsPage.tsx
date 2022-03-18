import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../reducers/productsReducer";
import { ProductObject, RootState } from "../../state";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addItemsToCart } from "../../reducers/cartReducer";
import { CardItem } from "./styled";

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
  const addToCart = (item: ProductObject) => {
    dispatch(addItemsToCart(item));
  };

  const renderProducts = () => {
    return productsList.map((item, index) => (
      <Col key={index} xs={12} md={4} lg={3} style={{ margin: "5px 0" }}>
        <Card className="card-item">
          <CardItem
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
              <Button
                variant="primary"
                style={{ marginTop: "5px", backgroundColor: "#198754" }}
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  e.stopPropagation();
                  addToCart(item);
                }}
              >
                Add to cart
              </Button>
            </Card.Body>
          </CardItem>
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
