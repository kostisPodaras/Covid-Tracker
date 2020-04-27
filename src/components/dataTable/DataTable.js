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
  InputLabel,
  FormControl,
  NativeSelect,
  CircularProgress,
} from "@material-ui/core";

import withStyles from "@material-ui/core/styles/withStyles";

import { defaultSorting, headerRow, sortingOptions } from "./config";
import sortData from "../../redux/sorting-data/sortingDataAction";
import { CustomRow } from "./components";
import styles from "./styles";

type Props = {
  classes: Object,
};

const DataTable = ({ classes }: Props) => {
  const dispatch = useDispatch();
  const { countries, loading } = useSelector((state) => state.dailyUpdates);

  useEffect(() => {
    dispatch(sortData(defaultSorting));
  }, []);

  return (
    <>
      <div className={classes.sortingContainer}>
        <FormControl>
          <InputLabel>Sort By</InputLabel>
          <NativeSelect onChange={(e) => dispatch(sortData(e.target.value))}>
            {sortingOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </div>
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
                {headerRow.map((el) => (
                  <TableCell align="center" classes={{ root: classes.cell }}>
                    {el}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {loading ? (
              <CircularProgress
                disableShrink={true}
                classes={{ root: classes.loader }}
              />
            ) : (
              <TableBody>
                {countries.map((country) => (
                  <CustomRow key={country.name} country={country} />
                ))}
              </TableBody>
            )}
          </Table>
        </Scrollbars>
      </TableContainer>
    </>
  );
};

export default withStyles(styles)(DataTable);
