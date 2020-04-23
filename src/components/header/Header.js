import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { rona } from "../../assets/images";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { toggleNightMode } from "../../redux/UI/uiAction";
import { useDispatch } from "react-redux";

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
