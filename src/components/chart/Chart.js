import React from "react";
import { useSelector } from "react-redux";

import withStyles from "@material-ui/core/styles/withStyles";

import { LineChart, DoughnutChart } from "./components";
import styles from "./styles";

type Props = {
  classes: Object,
};

const Chart = ({ classes }: Props) => {
  const { countryName } = useSelector((state) => state.selectedCountry);

  return (
    <div className={classes.container}>
      {countryName ? <DoughnutChart /> : <LineChart />}
    </div>
  );
};

export default withStyles(styles)(Chart);
