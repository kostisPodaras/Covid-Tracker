import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";

import withStyles from "@material-ui/core/styles/withStyles";

import palette from "../../../../theme/palette";
import styles from "./styles";

type Props = {
  classes: Object,
  data: Array,
  days: Array,
};

const BarChart = ({ classes, data, days }: Props) => {
  const barData = {
    labels: days,
    datasets: [
      {
        label: "Daily Cases",
        backgroundColor: palette.timeline,
        data: data.map((el) => el.new_daily_cases),
      },
    ],
  };
  const options = {
    maintainAspectRatio: false, // Don't maintain w/h ratio
  };
  return <Bar options={options} height={90} data={barData} />;
};

export default withStyles(styles)(BarChart);
