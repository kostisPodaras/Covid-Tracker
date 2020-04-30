import React from "react";
import { Bar } from "react-chartjs-2";

import withStyles from "@material-ui/core/styles/withStyles";

import palette from "../../../../theme/palette";
import styles from "./styles";

type Props = {
  classes: Object,
  data: Array,
  days: Array,
  label: string,
};

const BarChart = ({ classes, data, days, label }: Props) => {
  const barData = {
    labels: days,
    datasets: [
      {
        label,
        backgroundColor: palette.timeline,
        data,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false, // Don't maintain w/h ratio
  };
  return <Bar options={options} height={90} data={barData} />;
};

export default withStyles(styles)(BarChart);
