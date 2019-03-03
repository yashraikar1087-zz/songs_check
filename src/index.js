import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//function to pass the combined reducers and gives a store object
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";
//pass a store to the provider component, store is created by passing the combined reducers to the createstore function
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
