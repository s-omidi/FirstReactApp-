import React, { useEffect } from "react";
import TopLearn from "./TopLearn";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  useEffect(() => {
    require("../utils/script")
  }, []);
  return (
    <BrowserRouter>
      <TopLearn />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
