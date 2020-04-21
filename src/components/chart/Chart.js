import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { isObjectEmpty } from "../../utils";

import styles from "./styles";
import { useSelector } from "react-redux";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

type Props = {
  classes: Object,
};

const Chart = ({ classes }: Props) => {
  const { country } = useSelector((state) => state.selectedCountry);

  return (
    <div className={classes.container}>
      {isObjectEmpty(country) ? <BarChart /> : <LineChart />}
    </div>
  );
};

export default withStyles(styles)(Chart);
