import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RegistrationContext from "./store/RegistrationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RegistrationContext>
      <App />
    </RegistrationContext>
  </React.StrictMode>
);
