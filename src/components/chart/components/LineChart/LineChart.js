import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Line } from "react-chartjs-2";
import palette from "../../../../theme/palette";
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
        borderColor: palette.infected,
        fill: true,
      },
      {
        label: "Deaths",
        data: dailyData.map(({ deaths }) => deaths.total),
        borderColor: palette.deaths,
        fill: true,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Don't maintain w/h ratio
  };

  return <Line options={options} data={lineChart} />;
};

export default withStyles(styles)(LineChart);
