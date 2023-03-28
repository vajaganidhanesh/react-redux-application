import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./state/actionCreators/actions";

function Header() {
  const products = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container-fluid bg-secondary text-white fw-bold d-flex justify-content-center fs-1 position-fixed z-index:1'>
      <div className=''>{products.length}</div>
    </div>
  );
}

export default Header;
