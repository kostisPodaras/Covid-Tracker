import React from "react";
import { useSelector } from "react-redux";

import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

import { CustomCard } from "./components";
import styles from "./styles";

type Props = {
  classes: Object,
};

const Cards = ({ classes }: Props) => {
  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = useSelector((state) => state.globalData);
  const { countryName } = useSelector((state) => state.selectedCountry);
  const { country } = useSelector((state) => state.selectedCountry);

  return (
    <Grid container justify="center" className={classes.container}>
      <CustomCard
        date={lastUpdate}
        cases={countryName ? country.confirmed?.value : confirmed?.value}
        status="Infected"
        description="active"
      />
      <CustomCard
        date={lastUpdate}
        cases={countryName ? country.recovered?.value : recovered?.value}
        status="Recovered"
        description="recovered"
      />
      <CustomCard
        date={lastUpdate}
        cases={countryName ? country.deaths?.value : deaths?.value}
        status="Deaths"
        description="death"
      />
    </Grid>
  );
};

export default withStyles(styles)(Cards);
