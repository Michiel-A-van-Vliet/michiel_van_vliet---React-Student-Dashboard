import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <App />
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
