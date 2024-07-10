import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ControlsProvider } from "./hooks/ControlsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ControlsProvider>
      <App />
    </ControlsProvider>
  </React.StrictMode>
);
