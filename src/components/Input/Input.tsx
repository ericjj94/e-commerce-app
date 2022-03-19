import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts, searchProducts } from "../../reducers/productsReducer";

let searchTimeout: any = null;

const Input = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    searchTimeout = setTimeout(() => {
      if (searchText) {
        dispatch(searchProducts(searchText));
      } else {
        dispatch(getProducts());
      }
    }, 500);
    return () => clearTimeout(searchTimeout);
  }, [searchText]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <input
      className="form-control me-2 search-input"
      type="search"
      value={searchText}
      placeholder="Search"
      aria-label="Search"
      onChange={handleChange}
    />
  );
};
export default Input;
