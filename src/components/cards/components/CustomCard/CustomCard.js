import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";
import classNames from "classnames";

import { dateFormat } from "../../../../utils";
import styles from "./styles";

type Props = {
  classes: Object,
  status: string,
  description: string,
  date: string,
};

const CustomCard = ({ classes, status, description, cases, date }: Props) => {
  return (
    <Grid item xs={12} md={3} className={classes.container}>
      <Card>
        <CardContent>
          <Typography>{status}</Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={cases === undefined ? 0 : cases}
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
