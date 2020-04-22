import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import { CustomCard } from "./components";
import { useSelector } from "react-redux";
import { isObjectEmpty } from "../../utils";
import styles from "./styles";

type Props = {
  classes: Object,
};

const Cards = ({ classes }: Props) => {
  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = useSelector((state) => state.data);

  const { country } = useSelector((state) => state.selectedCountry);
  console.log(country);

  return (
    <Grid container justify="center" className={classes.container}>
      <CustomCard
        date={lastUpdate}
        //check if i have selected a country, if yes i render her stats else the global
        cases={
          isObjectEmpty(country) ? country.confirmed.value : confirmed?.value
        }
        status="Infected"
        description="active"
      />
      <CustomCard
        date={lastUpdate}
        cases={
          isObjectEmpty(country) ? country.recovered.value : recovered?.value
        }
        status="Recovered"
        description="recovered"
      />
      <CustomCard
        date={lastUpdate}
        cases={isObjectEmpty(country) ? country.deaths.value : deaths?.value}
        status="Deaths"
        description="death"
      />
    </Grid>
  );
};

export default withStyles(styles)(Cards);
