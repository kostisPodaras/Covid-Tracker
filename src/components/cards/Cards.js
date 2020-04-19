import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import { CustomCard } from "./components";
import { useSelector } from "react-redux";
import styles from "./styles";

type Props = {
  classes: Object,
};

const Cards = ({ classes }: Props) => {
  const { confirmed, recovered, deaths, lastUpdate } = useSelector(
    (state) => state.data
  );
  return (
    <Grid container justify="center">
      <CustomCard
        date={lastUpdate}
        cases={confirmed?.value}
        status="Infected"
        description="active"
      />
      <CustomCard
        date={lastUpdate}
        cases={recovered?.value}
        status="Recovered"
        description="recovered"
      />
      <CustomCard
        date={lastUpdate}
        cases={deaths?.value}
        status="Deaths"
        description="death"
      />
    </Grid>
  );
};

export default withStyles(styles)(Cards);
