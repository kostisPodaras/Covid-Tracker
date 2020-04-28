import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import { CountryPicker, Chart, Cards, DataTable } from "../../components";

import styles from "./styles";

type Props = {
  classes: Object,
};

const Home = ({ classes }: Props) => {
  return (
    <div className={classes.container}>
      <Cards />
      <CountryPicker />
      <Chart />
      <DataTable />
    </div>
  );
};

export default withStyles(styles)(Home);
