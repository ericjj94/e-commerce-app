import { useSelector } from "react-redux";
import { RootState } from "../../state";
import { useNavigate } from "react-router-dom";
import { ItemsSpan } from "./styled";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import Input from "../Input";

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();
  const handleRedirect = (route: string) => {
    navigate(route);
  };
  const [animationState, setAnimationState] = useState(false);

  useEffect(() => {
    setAnimationState(true);
    setTimeout(() => {
      setAnimationState(false);
    }, 1000);
  }, [cartItems]);

  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          onClick={() => {
            handleRedirect("/");
          }}
        >
          E-commerce app
        </a>
        <form className="d-flex">
          <Input />
        </form>
        <div className="d-flex">
          <button
            className={`btn btn-outline-success d-flex ${animationState ? "cart-updated" : ""}`}
            type="submit"
            onClick={() => {
              handleRedirect("/cart");
            }}
          >
            <span>
              <FontAwesomeIcon icon={faCartArrowDown} />
              {` `}
              View Cart
            </span>
            {cartItems.length ? <ItemsSpan>{cartItems.length}</ItemsSpan> : null}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
