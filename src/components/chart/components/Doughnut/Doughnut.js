import React from "react";
import { useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";

import withStyles from "@material-ui/core/styles/withStyles";

import palette from "../../../../theme/palette";
import styles from "./styles";

type Props = {
  classes: Object,
};

const DoughnutChart = ({ classes }: Props) => {
  const { country } = useSelector((state) => state.selectedCountry);

  const doughnutData = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        backgroundColor: [palette.infected, palette.recovered, palette.deaths],
        hoverBackgroundColor: [
          palette.casesHover.infected,
          palette.casesHover.recovered,
          palette.casesHover.deaths,
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
