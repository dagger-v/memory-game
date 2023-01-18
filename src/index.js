import React from "react";
import ReactDOM from "react-dom/client";

import App from "./Components/App";
import Header from "./Components/Header";
import Card from "./Components/Card";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Card />
  </React.StrictMode>
);
