import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Line, Bar } from "react-chartjs-2";
import { isObjectEmpty } from "../../utils";

import styles from "./styles";
import { useSelector } from "react-redux";

type Props = {
  classes: Object,
};

const Chart = ({ classes }: Props) => {
  const dailyData = useSelector((state) => state.dailyData.data);
  const { country } = useSelector((state) => state.selectedCountry);

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

  const barChart = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        label: "Number of People",
        backgroundColor: [
          "rgba(0, 0, 255, 0.5",
          "rgba(0, 255, 0, 0.5",
          "rgba(255, 0, 0, 0.5",
        ],
        data: [
          country.confirmed?.value,
          country.recovered?.value,
          country.deaths?.value,
        ],
      },
    ],
  };

  return (
    <div className={classes.container}>
      {isObjectEmpty(country) ? (
        <Bar height={100} data={barChart} />
      ) : (
        <Line height={110} data={lineChart} />
      )}
    </div>
  );
};

export default withStyles(styles)(Chart);
