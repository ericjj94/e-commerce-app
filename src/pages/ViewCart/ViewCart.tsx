import { Container, Row } from "react-bootstrap";
import { RootState } from "../../state";
import { useSelector } from "react-redux";

const ViewCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  if (cartItems && cartItems.length) {
    return <div>Your cart is empty. Add a product to the cart</div>;
  }
  return (
    <Container>
      <Row></Row>
    </Container>
  );
};
export default ViewCart;
