import React, { useEffect } from "react";
import { CountryPicker, Chart, Cards, Header } from "./components";
import { fetchData } from "./redux/data/dataAction";
import { fetchDailyData } from "./redux/daily-data/dailyDataAction";
import { fetchCountries } from "./redux/countries/countriesAction";
import { useDispatch, useSelector } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";

import styles from "./styles";

type Props = {
  classes: Object,
};

const App = ({ classes }: Props) => {
  const dispatch = useDispatch();
  const { toggleNightMode } = useSelector((state) => state.toggleNightMode);

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchDailyData());
    dispatch(fetchCountries());
  }, []);

  return (
    <div
      className={classNames(
        classes.container,
        toggleNightMode ? classes.nightTheme : classes.dayTheme
      )}
    >
      <Header />
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
};

export default withStyles(styles)(App);
