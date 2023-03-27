import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./actionCreators/actions";
function Getdetails() {
  const products = useSelector((state) => state.Reducer);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
      {products.map((val, index) => {
        return (
          <div key={index} className='card w-25 m-1'>
            <div className='card-image'>
              <h3>{val.title} </h3>
              <img src={val.image} className='img-fluid' alt='' />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Getdetails;
