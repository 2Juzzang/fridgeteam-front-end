import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/configStore";
import App from "./shared/App";

ReactDOM.render(
  <Provider store={store}>
  

   <App />

  </Provider>,
  document.getElementById("root")
);

