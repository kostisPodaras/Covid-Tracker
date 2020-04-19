import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Line } from "react-chartjs-2";

import styles from "./styles";
import { useSelector } from "react-redux";

type Props = {
  classes: Object,
};

const Chart = ({ classes }: Props) => {
  const dailyData = useSelector((state) => state.dailyData.data);

  const data = {
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

  return (
    <div className={classes.container}>
      <Line height={125} data={data} />
    </div>
  );
};

export default withStyles(styles)(Chart);
