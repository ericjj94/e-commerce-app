import { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from "../../components/StarRating";
import { addItemsToCart } from "../../reducers/cartReducer";
import { getProductDetails } from "../../reducers/productsReducer";
import { RootState } from "../../state";
import { PriceText, ProductDescriptionText, SmallButton } from "../../styled";

const ProductDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state: RootState) => state.products.productDetails);

  useEffect(() => {
    dispatch(getProductDetails(Number(params.id)));
  }, []);

  const renderDetails = () => {
    return (
      <>
        <Row>
          <h2>{details.title}</h2>
        </Row>
        <Row>
          <PriceText>€ {details.price}</PriceText>
        </Row>
        <hr />
        <Row>
          <ProductDescriptionText>Product Description</ProductDescriptionText>
          <Row className="ml-2 mt-3">
            <p>{details.description}</p>
          </Row>
        </Row>
        <hr />
        <Row>
          <ProductDescriptionText>Product Rating</ProductDescriptionText>
        </Row>

        <Row>
          <p className="pl-2 mt-3">
            This product was brought by {details.rating?.count} users and the average rating is{" "}
            <b>{details.rating?.rate}</b>
          </p>
        </Row>
        <Row>
          <p>
            <StarRating rating={details.rating?.rate} />
          </p>
        </Row>
      </>
    );
  };
  const handleAddToCart = () => {
    dispatch(addItemsToCart(details));
  };
  const handlePlaceOrder = () => {
    navigate("/order");
  };
  return (
    <Container>
      <Row>
        <div className="col-md-3">
          <img src={details.image} height={"100%"} width={"100%"} />
        </div>
        <div className="col-md-9">{renderDetails()}</div>
      </Row>
      <Row style={{ display: "flex", gap: "1rem" }} className="mt-5">
        <SmallButton onClick={handleAddToCart}>Add to Cart</SmallButton>
        <SmallButton backgroundColor={"#0d6efd"} onClick={handlePlaceOrder}>
          Place Order
        </SmallButton>
      </Row>
    </Container>
  );
};
export default ProductDetails;
