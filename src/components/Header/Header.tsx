import { useSelector } from "react-redux";
import { RootState } from "../../state";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/cart");
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          E-commerce app
        </a>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="d-flex">
          <button className="btn btn-outline-success" type="submit" onClick={handleRedirect}>
            View Cart
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
