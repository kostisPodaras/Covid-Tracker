import React from "react";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";

import App from "./App";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
