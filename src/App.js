import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Paper from "@material-ui/core/Paper";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import withStyles from "@material-ui/core/styles/withStyles";

import { fetchData } from "./redux/data/dataAction";
import { fetchDailyData } from "./redux/daily-global-data/dailyDataAction";
import { fetchCountries } from "./redux/countries/countriesAction";
import { CountryPicker, Chart, Cards, Header, DataTable } from "./components";
import theme from "./theme";

import styles from "./styles";

type Props = {
  classes: Object,
};

const App = ({ classes }: Props) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (state) => state.toggleNightMode.toggleNightMode
  );
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchDailyData());
    dispatch(fetchCountries());
  }, []);

  return (
    <ThemeProvider theme={theme(isDarkMode ? "dark" : "light")}>
      <Paper className={classes.container}>
        <Header />
        <Cards />
        <CountryPicker />
        <Chart />
        <DataTable />
      </Paper>
    </ThemeProvider>
  );
};

export default withStyles(styles)(App);
