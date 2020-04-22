import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { isObjectEmpty } from "../../utils";

import styles from "./styles";
import { useSelector } from "react-redux";
import { LineChart, BarChart, DoughnutChart } from "./components";

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
