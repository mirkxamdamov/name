import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Provider as ReduxProvider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import { store } from "./store/config-store";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth/auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);
