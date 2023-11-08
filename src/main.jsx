import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import "./assets/styles/index.css";
import { HelmetProvider } from "react-helmet-async";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
