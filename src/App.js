import React, { useEffect } from "react";
import { CountryPicker, Chart, Cards } from "./components";
import { fetchData } from "./redux/data/dataAction";
import { useDispatch } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";

import styles from "./styles";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    console.log("effect was called");
  }, []);

  return (
    <div>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
};

export default withStyles(styles)(App);
