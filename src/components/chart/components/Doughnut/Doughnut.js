import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Doughnut } from "react-chartjs-2";

import styles from "./styles";
import { useSelector } from "react-redux";

type Props = {
  classes: Object,
};

const DoughnutChart = ({ classes }: Props) => {
  const { country } = useSelector((state) => state.selectedCountry);

  const doughnutData = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        label: "Number of People",
        backgroundColor: [
          "rgba(0, 0, 255, 0.5",
          "rgba(0, 255, 0, 0.5",
          "rgba(255, 0, 0, 0.5",
        ],
        hoverBackgroundColor: [
          "rgba(0, 0, 255, 0.7",
          "rgba(0, 255, 0, 0.7",
          "rgba(255, 0, 0, 0.7",
        ],
        data: [
          country.confirmed?.value,
          country.recovered?.value,
          country.deaths?.value,
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Don't maintain w/h ratio
  };

  return <Doughnut options={options} data={doughnutData} />;
};

export default withStyles(styles)(DoughnutChart);
