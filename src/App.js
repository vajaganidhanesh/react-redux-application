import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreater } from "./state/index";
import { bindActionCreators } from "redux";
import "./App.css";
function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { depositAmount, withDrawAmount } = bindActionCreators(
    actionCreater,
    dispatch
  );

  return (
    <>
      <div className='App'>
        <h1>{state.account}</h1>
        <span className='card'>
          <button
            onClick={() => {
              depositAmount(1000);
            }}
          >
            add
          </button>
          <button
            onClick={() => {
              withDrawAmount(1000);
            }}
          >
            delete
          </button>
        </span>
      </div>
    </>
  );
}

export default App;
