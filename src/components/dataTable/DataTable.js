import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

import defaultSorting from "./config";
import sortData from "../../redux/sorting-data/sortingDataAction";
import styles from "./styles";

type Props = {
  classes: Object,
};

const DataTable = ({ classes }: Props) => {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.dailyUpdates);
  const [sortOption, setSortOption] = useState(defaultSorting);

  useEffect(() => {
    dispatch(sortData(sortOption));
  }, [sortOption]);

  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">Total Cases</TableCell>
            <TableCell align="right">New Cases</TableCell>
            <TableCell align="right">Deaths</TableCell>
            <TableCell align="right">New Deaths</TableCell>
            <TableCell align="right">Recovered</TableCell>
            <TableCell align="right">Active Cases</TableCell>
            <TableCell align="right">Critical</TableCell>
            <TableCell align="right">Tests</TableCell>
            <TableCell align="right">Cases/1M</TableCell>
            <TableCell align="right">Deaths/1M</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map((country) => (
            <TableRow key={country.country}>
              <TableCell component="th" scope="row">
                {country.country}
              </TableCell>
              <TableCell align="right">{country.cases}</TableCell>
              <TableCell align="right">
                {!!country.todayCases && `+${country.todayCases}`}
              </TableCell>
              <TableCell align="right">{country.deaths}</TableCell>
              <TableCell align="right">
                {!!country.todayDeaths && `+${country.todayDeaths}`}
              </TableCell>
              <TableCell align="right">{country.recovered}</TableCell>
              <TableCell align="right">{country.active}</TableCell>
              <TableCell align="right">{country.critical}</TableCell>
              <TableCell align="right">{country.tests}</TableCell>
              <TableCell align="right">{country.casesPerOneMillion}</TableCell>
              <TableCell align="right">{country.deathsPerOneMillion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default withStyles(styles)(DataTable);
