import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";

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

import { defaultSorting, rows } from "./config";
import sortData from "../../redux/sorting-data/sortingDataAction";
import styles from "./styles";

type Props = {
  classes: Object,
};

const DataTable = ({ classes }: Props) => {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.dailyUpdates);
  const isDarkMode = useSelector(
    (state) => state.toggleNightMode.toggleNightMode
  );
  const [sortOption, setSortOption] = useState(defaultSorting);

  useEffect(() => {
    dispatch(sortData(sortOption));
  }, [sortOption]);

  return (
    <TableContainer className={classes.container}>
      <Scrollbars
        autoHeightMin={100}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              {rows.map((el) => (
                <TableCell align="left" classes={{ root: classes.cell }}>
                  {el}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {countries.map((country) => (
              <TableRow
                classes={!isDarkMode ? { root: classes.row } : null}
                key={country.country}
              >
                <TableCell align="left" component="th" scope="row">
                  {country.country}
                </TableCell>
                <TableCell align="left">{country.cases}</TableCell>
                <TableCell align="left">
                  {!!country.todayCases && `+${country.todayCases}`}
                </TableCell>
                <TableCell align="left">{country.deaths}</TableCell>
                <TableCell align="left">
                  {!!country.todayDeaths && `+${country.todayDeaths}`}
                </TableCell>
                <TableCell align="left">{country.recovered}</TableCell>
                <TableCell align="left">{country.active}</TableCell>
                <TableCell align="left">{country.critical}</TableCell>
                <TableCell align="left">{country.tests}</TableCell>
                <TableCell align="left">{country.casesPerOneMillion}</TableCell>
                <TableCell align="left">
                  {country.deathsPerOneMillion}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbars>
    </TableContainer>
  );
};

export default withStyles(styles)(DataTable);
