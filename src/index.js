import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PProvider } from "./contex";

ReactDOM.render(
  <PProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PProvider>,
  document.getElementById("root")
);
