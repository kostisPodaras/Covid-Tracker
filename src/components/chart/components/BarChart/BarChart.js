import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Bar } from "react-chartjs-2";

import styles from "./styles";
import { useSelector } from "react-redux";

type Props = {
  classes: Object,
};

const BarChart = ({ classes }: Props) => {
  const { country } = useSelector((state) => state.selectedCountry);

  const barData = {
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

  return <Bar height={90} data={barData} />;
};

export default withStyles(styles)(BarChart);
