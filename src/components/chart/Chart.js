import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { isObjectEmpty } from "../../utils";
import { useSelector } from "react-redux";
import { LineChart, BarChart, DoughnutChart } from "./components";

import styles from "./styles";

type Props = {
  classes: Object,
};

const Chart = ({ classes }: Props) => {
  const country = useSelector((state) => state.selectedCountry);

  return (
    <div className={classes.container}>
      {isObjectEmpty(country) ? <DoughnutChart /> : <LineChart />}
    </div>
  );
};

export default withStyles(styles)(Chart);
