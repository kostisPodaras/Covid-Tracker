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
    <Grid
      className={classes.container}
      container
      justify="center"
      alignItems="center"
    >
      <BarChart
        data={objectKeys(timeline[0])}
        days={objectKeysToArray(timeline[0])}
      />
    </Grid>
  );
};

export default withStyles(styles)(Country);
