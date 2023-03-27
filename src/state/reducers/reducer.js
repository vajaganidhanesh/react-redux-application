const inital = [];

export default function Reducer(state = inital, action) {
  const { type, payload } = action;
  switch (type) {
    case "fetchProducts":
      return payload;
    case "deleteProduct":
      return state.filter((items) => items.id !== payload);
    default:
      return state;
  }
}
