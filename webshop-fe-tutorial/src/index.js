import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BasketProvider from "./context/BasketContext";
import UserProvider from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BasketProvider>
        <App />
      </BasketProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
