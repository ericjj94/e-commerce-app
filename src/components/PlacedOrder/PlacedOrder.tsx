import { useDispatch, useSelector } from "react-redux";
import { CartObject, RootState } from "../../state";
import { Container, Row, Button, Card } from "react-bootstrap";
import { SmallButton, PriceText } from "../../styled";
import { useNavigate } from "react-router-dom";
import { clearCart, setOrder } from "../../reducers/cartReducer/cartReducer";
import { CardItem } from "../../pages/ProductsPage/styled";

const PlacedOrder = () => {
  const orderPlaced = useSelector((state: RootState) => state.cart.orderPlaced);
  const orderDetails = useSelector((state: RootState) => state.cart.orderDetails);
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  if (!orderPlaced) {
    return null;
  }
  const handleRedirect = () => {
    dispatch(clearCart());
    dispatch(setOrder(false));
    navigate("/");
  };

  const renderOrderDetails = () => {
    return (
      <>
        <Row>
          <p>Email: {orderDetails.email}</p>
          <p>Order Date: {orderDetails.orderDate}</p>
        </Row>
        <Row>
          <h2>Items ordered</h2>
          {cartItems.map((item: CartObject, index) => (
            <Card className="card-item " style={{ width: "18rem" }}>
              <CardItem>
                <Card.Body>
                  <Card.Img variant="top" src={item.image} style={{ height: "200px", width: "200px" }} />
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
              </CardItem>
            </Card>
          ))}
        </Row>
      </>
    );
  };
  return (
    <Container>
      <Row>
        <PriceText>{`You're order has been placed with order id: ${orderDetails.orderId}`}</PriceText>
        {renderOrderDetails()}
        <div className="d-flex flex-column align-items-center mt-4">
          <p>Thank you for shopping</p>
          <SmallButton button="medium" onClick={handleRedirect}>
            Click here to shop
          </SmallButton>
        </div>
      </Row>
    </Container>
  );
};
export default PlacedOrder;
