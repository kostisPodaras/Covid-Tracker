import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Bar } from "react-chartjs-2";
import palette from "../../../../theme/palette";
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
        backgroundColor: [palette.infected, palette.recovered, palette.deaths],
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
