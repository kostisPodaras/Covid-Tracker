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
      <TableCell
        classes={{ root: classes.cell }}
        align="left"
        component="th"
        scope="row"
      >
        <Grid container>
          <div className={classes.container}>
            {country.country}
            {/* <Avatar
              classes={{ root: classes.avatar }}
              alt="flag"
              src={country.countryInfo.flag}
              className={classes.avatar}
            /> */}
          </div>
        </Grid>
      </TableCell>
      <TableCell classes={{ root: classes.cell }} align="center">
        {country.cases}
      </TableCell>
      <TableCell
        className={classes.dailyCases}
        classes={{ root: classes.cell }}
        align="center"
      >
        {!!country.todayCases && `+${country?.todayCases}`}
      </TableCell>
      <TableCell classes={{ root: classes.cell }} align="center">
        {country.deaths}
      </TableCell>
      <TableCell
        className={classes.dailyDeaths}
        classes={{ root: classes.cell }}
        align="center"
      >
        {!!country.todayDeaths && `+${country.todayDeaths}`}
      </TableCell>
      <TableCell classes={{ root: classes.cell }} align="center">
        {country.recovered}
      </TableCell>
      <TableCell classes={{ root: classes.cell }} align="center">
        {country.active}
      </TableCell>
      <TableCell classes={{ root: classes.cell }} align="center">
        {country.critical}
      </TableCell>
      <TableCell classes={{ root: classes.cell }} align="center">
        {country.tests}
      </TableCell>
      <TableCell classes={{ root: classes.cell }} align="center">
        {country.casesPerOneMillion}
      </TableCell>
      <TableCell classes={{ root: classes.cell }} align="center">
        {country.deathsPerOneMillion}
      </TableCell>
    </TableRow>
  );
};

export default withStyles(styles)(CustomRow);
