import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./actionCreators/actions";
function Getdetails(props) {
  const { fetchProducts } = props;
  console.log(fetchProducts);
  useEffect(() => {
    fetchProducts();
  }, []);
  return <div>Getdetails</div>;
}

export default connect(null, { fetchProducts })(Getdetails);
