import { Container, Row, Button } from "react-bootstrap";
import { CartObject, RootState } from "../../state";
import { useDispatch, useSelector } from "react-redux";
import { SmallButton, HeadingText } from "../../styled";
import "./style.css";
import { useNavigate } from "react-router-dom";
import {
  addItemsToCart,
  clearCart,
  reduceQuantityForItem,
  removeItemsFromCart,
} from "../../reducers/cartReducer/cartReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

// NOTE: Discount should be added from the backend on the product
let discount = 0;

const ViewCart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (selectedItem: CartObject) => {
    dispatch(removeItemsFromCart(selectedItem.id));
  };

  const addSelectedItemToCart = (selectedItem: CartObject) => {
    dispatch(addItemsToCart(selectedItem));
  };
  const reduceQuantity = (selecteditem: CartObject) => {
    dispatch(reduceQuantityForItem(selecteditem));
  };

  const renderCartItems = () => {
    return cartItems.map((item: CartObject) => (
      <>
        <Row key={`${item.id}-${item.quantity}`} className="cart-items mt-1">
          <div className="col-md-2">
            <img src={item.image} alt="cart-item" height={"100%"} width={"100%"} />
          </div>
          <div className="col-md-10">
            <p>
              <b>{item.title}</b>
            </p>
            <p>{item.description}</p>
            <p>
              <b>
                No of items:
                <FontAwesomeIcon
                  icon={faMinus}
                  className="quantity-icon"
                  onClick={() => {
                    reduceQuantity(item);
                  }}
                />
                {item.quantity}
              </b>
              <FontAwesomeIcon
                icon={faPlus}
                className="quantity-icon"
                onClick={() => {
                  addSelectedItemToCart(item);
                }}
              />
            </p>
            <p>
              <b>Total Price: € {item.price * item.quantity}</b>
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
    const price = cartItems.reduce((acc, item: CartObject) => (acc += item.price * item.quantity), 0);
    return Math.floor(price);
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
          <Button
            onClick={() => {
              navigate("/order");
            }}
          >
            Place order
          </Button>
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
        <FontAwesomeIcon icon={faBasketShopping} style={{ fontSize: "100px" }} />
        <span>Your cart is empty!</span>
        <SmallButton onClick={handleRedirect}>Shop now</SmallButton>
      </Row>
    );
  }
  const clearAll = () => {
    dispatch(clearCart());
  };
  return (
    <Container>
      <Row className="d-flex flex-row">
        <div className="d-flex col-md-12">
          <HeadingText className="f-grow-2">My Cart {cartItems.length ? `(${cartItems.length})` : ""}</HeadingText>
          <Button variant="danger" size="sm" onClick={clearAll} className="m-auto">
            Clear Cart
          </Button>
        </div>
      </Row>
      <Row className="main-content">
        <div className="col-md-7">{renderCart()}</div>
        {cartItems?.length ? <div className="col-md-4">{renderPrice()}</div> : null}
      </Row>
    </Container>
  );
};
export default ViewCart;
