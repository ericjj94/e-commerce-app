import React, { useCallback, useMemo, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DefaultInput from "../../components/DefaultInput";
import PlacedOrder from "../../components/PlacedOrder";
import { placeOrder } from "../../actions/cartActions";
import { CartObject, RootState } from "../../state";
import { SmallButton, PriceText } from "../../styled";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Order = () => {
  const [email, setEmail] = useState("");
  const [step, setCurrentStep] = useState("orderSummary");
  const [error, setError] = useState("");
  const orderPlaced = useSelector((state: RootState) => state.cart.orderPlaced);

  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (!email) {
      setError("Missing email field");
    } else if (!validateEmail(email)) {
      setError("Please enter a correct email");
    } else {
      dispatch(placeOrder(email));
      console.log("calling API for login");
    }
  };

  const renderLoginDetails = () => {
    return (
      <Row>
        <div className="card">
          <div className="card-body">
            <PriceText>Login Details</PriceText>
            <hr />
            <p className="card-text">Enter your email address to place your order</p>
            <div className="d-flex gap-2">
              <DefaultInput
                className="form-control w-50"
                value={email}
                placeholder={"Enter your email here"}
                onChange={handleChange}
              />
              <SmallButton button="medium" onClick={handleSubmit}>
                Confirm your email
              </SmallButton>
            </div>
            <p className="error">{error}</p>
          </div>
        </div>
      </Row>
    );
  };

  const calculatePrice = useCallback(
    (item: CartObject) => {
      const price = item.price * item.quantity;
      return Number(price).toFixed(2);
    },
    [cartItems]
  );

  const renderCartSummary = () => {
    return cartItems.map((item: CartObject, index: number) => {
      return (
        <div key={index}>
          <Row>
            <div className="col-md-2">
              <img src={item.image} style={{ height: "100px", width: "100px" }} />
            </div>
            <div className="col-md-10">
              <PriceText>{item.title}</PriceText>
              <p>{item.description}</p>

              <PriceText>
                {" "}
                € {calculatePrice(item)} for {item.quantity} {item.quantity === 1 ? "item" : "items"}
              </PriceText>
            </div>
          </Row>
          <hr />
        </div>
      );
    });
  };

  const calculateTotalPrice = useMemo(() => {
    const price = cartItems.reduce((acc, item: CartObject) => (acc += item.price * item.quantity), 0);
    return Number(price).toFixed(2);
  }, [cartItems]);

  const handleSteps = (step: string) => {
    setCurrentStep(step);
  };

  const renderOrderSummary = () => {
    return (
      <Row>
        <div className="card">
          <div className="card-body">
            <PriceText
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleSteps("orderSummary");
              }}
            >
              Order summary
            </PriceText>
            {step === "orderSummary" ? (
              <>
                <hr />
                {renderCartSummary()}
                <SmallButton
                  backgroundColor="#0d6efd"
                  onClick={() => {
                    if (cartItems.length) {
                      handleSteps("login");
                    }
                  }}
                >
                  Proceed to order
                </SmallButton>
              </>
            ) : null}

            <p>Total price: € {calculateTotalPrice}</p>
          </div>
        </div>
      </Row>
    );
  };

  const renderOrderContainer = () => {
    if (!orderPlaced) {
      return (
        <>
          {renderOrderSummary()}
          {step === "login" ? renderLoginDetails() : null}
        </>
      );
    }
    return null;
  };

  return (
    <Container className="d-flex gap-3 flex-column">
      {renderOrderContainer()}
      <PlacedOrder />
    </Container>
  );
};
export default Order;
