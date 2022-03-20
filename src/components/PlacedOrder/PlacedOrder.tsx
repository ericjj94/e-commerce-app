import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state";
import { Container, Row, Button } from "react-bootstrap";
import { SmallButton, PriceText } from "../../styled";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../reducers/cartReducer";

const PlacedOrder = () => {
  const orderPlaced = useSelector((state: RootState) => state.cart.orderPlaced);
  const orderDetails = useSelector((state: RootState) => state.cart.orderDetails);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!orderPlaced) {
    return null;
  }
  const handleRedirect = () => {
    dispatch(clearCart());
    navigate("/");
  };

  const renderOrderDetails = () => {
    return (
      <Row>
        <p>Email: {orderDetails.email}</p>
        <p>Order Date: {orderDetails.orderDate}</p>
      </Row>
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
