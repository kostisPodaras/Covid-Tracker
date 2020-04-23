import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import muiTheme from "./theme";

import App from "./App";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  );
};

export default AppWrapper;
