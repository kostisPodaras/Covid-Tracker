import React, { useEffect } from "react";
import { CountryPicker, Chart, Cards } from "./components";
import { fetchData } from "./redux/data/dataAction";
import { fetchDailyData } from "./redux/daily-data/dailyDataAction";
import { fetchCountries } from "./redux/countries/countriesAction";
import { useDispatch } from "react-redux";
import { rona } from "./assets/images";
import withStyles from "@material-ui/core/styles/withStyles";

import styles from "./styles";

type Props = {
  classes: Object,
};

const App = ({ classes }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchDailyData());
    dispatch(fetchCountries());
  }, []);

  return (
    <div className={classes.container}>
      <img src={rona} alt="COVID-19" />
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
};

export default withStyles(styles)(App);
