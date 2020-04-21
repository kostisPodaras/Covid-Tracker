import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Line } from "react-chartjs-2";

import styles from "./styles";
import { useSelector } from "react-redux";

type Props = {
  classes: Object,
};

const LineChart = ({ classes }: Props) => {
  const dailyData = useSelector((state) => state.dailyData.data);

  const lineChart = {
    labels: dailyData.map((date) => date.reportDate),
    datasets: [
      {
        label: "Infected",
        data: dailyData.map(({ totalConfirmed }) => totalConfirmed),
        borderColor: "#3333ff",
        fill: true,
      },
      {
        label: "Deaths",
        data: dailyData.map(({ deaths }) => deaths.total),
        borderColor: "rgba(255,9,9,0.5)",
        fill: true,
      },
    ],
  };

  return <Line height={100} data={lineChart} />;
};

export default withStyles(styles)(LineChart);
