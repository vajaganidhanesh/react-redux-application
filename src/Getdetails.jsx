import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "./state/actionCreators/actions";
function Getdetails() {
  const products = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className='container-fluid bg-secondary text-white fw-bold d-flex justify-content-center fs-1 position-fixed z-index:1'>
        <div className=''>{products.length}</div>
      </div>
      <div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
        {products.map((val, index) => {
          return (
            <div key={index} className='card w-25 m-1'>
              <div className='card-image'>
                <h3>{val.title} </h3>
                <img src={val.image} className='img-fluid' alt='' />
                <div>
                  <button
                    className='btn btn-danger'
                    onClick={() => {
                      dispatch(deleteProduct(val.id));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Getdetails;
