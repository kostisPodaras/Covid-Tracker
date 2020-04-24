import React from "react";
import { useSelector } from "react-redux";
import CountUp from "react-countup";

import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

import { dateFormat } from "../../../../utils";
import styles from "./styles";

type Props = {
  classes: Object,
  status: string,
  description: string,
  date: string,
};

const CustomCard = ({ classes, status, description, cases, date }: Props) => {
  const isDarkMode = useSelector(
    (state) => state.toggleNightMode.toggleNightMode
  );
  return (
    <Grid item xs={12} md={3} className={classes.container}>
      <Card
        variant={isDarkMode ? "outlined" : null}
        className={classes.card}
        classes={{ root: classes.rootCard }}
      >
        <CardContent>
          <Typography>{status}</Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={cases ? cases : 0}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography>{dateFormat(date)}</Typography>
          <Typography variant="body2">
            Number of {description} cases of COVID-19
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(CustomCard);
