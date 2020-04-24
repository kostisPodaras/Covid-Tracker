import React from "react";
import { useDispatch } from "react-redux";

import { FormControlLabel, Switch, Grid, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

import { toggleNightMode } from "../../redux/UI/uiAction";
import { rona } from "../../assets/images";
import styles from "./styles";

type Props = {
  classes: Object,
};

const Header = ({ classes }: Props) => {
  const dispatch = useDispatch();

  return (
    <Grid container justify="center" className={classes.container}>
      <img src={rona} alt="COVID-19" />

      <FormControlLabel
        onClick={() => dispatch(toggleNightMode())}
        className={classes.switcher}
        value="bottom"
        control={<Switch color="primary" />}
        label={<Typography variant="caption">Switch Mode</Typography>}
        labelPlacement="bottom"
      />
    </Grid>
  );
};

export default withStyles(styles)(Header);
