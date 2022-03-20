import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StarRating from "../../components/StarRating";
import { addItemsToCart } from "../../reducers/cartReducer/cartReducer";
import { getProductDetails } from "../../reducers/productsReducer/productsReducer";
import { RootState } from "../../state";
import { PriceText, ProductDescriptionText, SmallButton } from "../../styled";

const ProductDetails = () => {
  const params = useParams();
  const [showAddMessage, setShowMessage] = useState(false);
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
            This product was brought by {details.rating?.count} users and has an average rating of{" "}
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
    setShowMessage(true);
    dispatch(addItemsToCart(details));
    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  };
  return (
    <Container>
      <Row>
        <div className="col-md-3">
          <img src={details.image} height={"100%"} width={"100%"} className="product-image" />
        </div>
        <div className="col-md-9">{renderDetails()}</div>
      </Row>
      <Row className="mt-5 d-flex flex-row">
        <SmallButton onClick={handleAddToCart}>
          Add to Cart &nbsp;
          {showAddMessage ? <FontAwesomeIcon icon={faCheck} /> : null}
        </SmallButton>
      </Row>
    </Container>
  );
};
export default ProductDetails;
