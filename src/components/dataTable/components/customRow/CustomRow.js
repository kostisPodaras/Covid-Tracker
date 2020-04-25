import React from "react";
import { useSelector } from "react-redux";

import { TableCell, TableRow, Avatar, Grid } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

import styles from "./styles";

type Props = {
  classes: Object,
  country: Object,
};

const CustomRow = ({ classes, country }: Props) => {
  const isDarkMode = useSelector(
    (state) => state.toggleNightMode.toggleNightMode
  );
  return (
    <TableRow
      classes={!isDarkMode ? { root: classes.row } : null}
      key={country.country}
    >
      <TableCell align="left" component="th" scope="row">
        <Grid container>
          <div className={classes.container}>
            {country.country}
            <Avatar
              classes={{ root: classes.avatar }}
              alt="flag"
              src={country.countryInfo.flag}
              className={classes.avatar}
            />
          </div>
        </Grid>
      </TableCell>
      <TableCell align="left">{country?.cases}</TableCell>
      <TableCell align="left">
        {!!country?.todayCases && `+${country?.todayCases}`}
      </TableCell>
      <TableCell align="left">{country?.deaths}</TableCell>
      <TableCell align="left">
        {!!country?.todayDeaths && `+${country.todayDeaths}`}
      </TableCell>
      <TableCell align="left">{country?.recovered}</TableCell>
      <TableCell align="left">{country?.active}</TableCell>
      <TableCell align="left">{country?.critical}</TableCell>
      <TableCell align="left">{country?.tests}</TableCell>
      <TableCell align="left">{country?.casesPerOneMillion}</TableCell>
      <TableCell align="left">{country?.deathsPerOneMillion}</TableCell>
    </TableRow>
  );
};

export default withStyles(styles)(CustomRow);
