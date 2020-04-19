import React, { useEffect } from "react";
import { CountryPicker, Chart, Cards } from "./components";
import { fetchData } from "./redux/data/dataAction";
import { useDispatch } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";

import styles from "./styles";

type Props = {
  classes: Object,
};

const App = ({ classes }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className={classes.container}>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
};

export default withStyles(styles)(App);
