import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Getdetails from "./state/Getdetails";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Getdetails />} />
      </Routes>
    </Router>
  );
}

export default App;
