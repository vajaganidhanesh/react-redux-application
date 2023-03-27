const inital = [];

export default function Reducer(state = inital, action) {
  const { type, payload } = action;
  switch (type) {
    case "fetchProducts":
      return payload;
    case "REMOVE":
      return state.filter((product) => product.name !== payload.name);
    default:
      return state;
  }
}
