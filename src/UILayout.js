import React from "react";
import { useSelector } from "react-redux";

import Paper from "@material-ui/core/Paper";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import withStyles from "@material-ui/core/styles/withStyles";

import { CountryPicker, Chart, Cards, Header } from "./components";
import theme from "./theme";

import styles from "./styles";
type Props = {
  classes: Object,
};

const UILayout = ({ classes }: Props) => {
  const isDarkMode = useSelector(
    (state) => state.toggleNightMode.toggleNightMode
  );

  return (
    <ThemeProvider theme={theme(isDarkMode ? "dark" : "light")}>
      <Paper className={classes.container}>
        <Header />
        <Cards />
        <CountryPicker />
        <Chart />
      </Paper>
    </ThemeProvider>
  );
};

export default withStyles(styles)(UILayout);
