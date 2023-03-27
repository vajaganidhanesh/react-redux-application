// export const fetchProducts = async () => {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const data = await response.json();
//   console.log(data);
//   return (dispatch) => {
//     dispatch({ type: "fetchProducts", payload: data });
//   };
// };

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch({ type: "fetchProducts", payload: data });
  };
};
