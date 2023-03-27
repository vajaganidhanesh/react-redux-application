export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: "deleteProduct", payload: id });
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch({ type: "fetchProducts", payload: data });
  };
};
