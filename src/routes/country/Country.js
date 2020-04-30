import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

import fetchTimeline from "../../redux/countryTimeline/countryTimelineAction";
import { BarChart } from "../../components/chart/components";
import { objectKeysToArray, objectKeys } from "../../utils";
import styles from "./styles";

type Props = {
  classes: Object,
  match: Object,
};

const Country = ({ classes, match }: Props) => {
  const dispatch = useDispatch();
  const { timeline } = useSelector((state) => state.timeline);

  useEffect(() => {
    dispatch(
      fetchTimeline(
        `https://api.thevirustracker.com/free-api?countryTimeline=${match.params.id}`
      )
    );
  }, []);
  return (
    <Grid container justify="center" alignItems="center">
      <div className={classes.chartWrapper}>
        <BarChart
          data={objectKeys(timeline[0]).map((el) => el.new_daily_cases)}
          days={objectKeysToArray(timeline[0])}
          label="Daily Cases"
        />
      </div>
      <div className={classes.chartWrapper}>
        <BarChart
          data={objectKeys(timeline[0]).map((el) => el.new_daily_deaths)}
          days={objectKeysToArray(timeline[0])}
          label="Daily Deaths"
        />
      </div>
    </Grid>
  );
};

export default withStyles(styles)(Country);
