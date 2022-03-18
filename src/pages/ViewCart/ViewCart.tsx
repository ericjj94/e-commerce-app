import { Container, Row, Button } from "react-bootstrap";
import { ProductObject, RootState } from "../../state";
import { useDispatch, useSelector } from "react-redux";
import { SmallButton, HeadingText } from "../../styled";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { removeItemsFromCart } from "../../reducers/cartReducer";

// should be added from backend or calculated on product
let discount = 0;

const ViewCart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (selectedItem: ProductObject) => {
    dispatch(removeItemsFromCart(selectedItem.id));
  };

  const renderCartItems = () => {
    return cartItems.map((item: ProductObject, index: number) => (
      <>
        <Row key={index} className="cart-items mt-1">
          <div className="col-md-2">
            <img src={item.image} alt="cart-item" height={"100%"} width={"100%"} />
          </div>
          <div className="col-md-10">
            <p>
              <b>{item.title}</b>
            </p>
            <p>{item.description}</p>
            <p>
              <b>{item.price}</b>
            </p>
            <p>
              <Button
                variant="danger"
                onClick={() => {
                  handleRemove(item);
                }}
              >
                Remove
              </Button>
            </p>
          </div>
        </Row>
      </>
    ));
  };

  const renderCart = () => {
    return <>{renderCartItems()}</>;
  };
  const calculatePrice = () => {
    const price = cartItems.reduce((acc, item: ProductObject) => (acc += item.price), 0);
    return Math.round(price);
  };
  const renderPrice = () => {
    return (
      <Row className="price-section mt-1">
        <Row className="mb-2">
          <b>PRICE DETAILS</b>
        </Row>
        <hr />
        <Row className="mt-4">
          <b className="d-flex">
            <span className="flex-grow-1">{`Price ${cartItems.length} items`}</span>
            <span>€ {calculatePrice()}</span>
          </b>
        </Row>
        <Row className="mt-4">
          <b className="d-flex">
            <span className="flex-grow-1">Discount</span>
            <span>€ 0</span>
          </b>
        </Row>
        <Row className="mt-4">
          <b className="d-flex">
            <span className="flex-grow-1">Total amount</span>
            <span>€ {calculatePrice() - discount}</span>
          </b>
        </Row>
        <Row className="mt-4">
          <Button>Place order</Button>
        </Row>
      </Row>
    );
  };

  const handleRedirect = () => {
    navigate("/");
  };

  if (!cartItems?.length) {
    return (
      <Row className="empty-cart">
        <span>Your cart is empty!</span>
        <SmallButton onClick={handleRedirect}>Shop now</SmallButton>
      </Row>
    );
  }
  return (
    <Container>
      <Row>
        <HeadingText>My Cart {cartItems.length ? `(${cartItems.length})` : ""}</HeadingText>
      </Row>
      <Row className="main-content">
        <div className="col-md-7">{renderCart()}</div>
        {cartItems?.length ? <div className="col-md-4">{renderPrice()}</div> : null}
      </Row>
    </Container>
  );
};
export default ViewCart;
