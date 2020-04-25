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
  Avatar,
  Grid,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

import { defaultSorting, rows } from "./config";
import sortData from "../../redux/sorting-data/sortingDataAction";
import { CustomRow } from "./components";
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
              <CustomRow key={country.name} country={country} />
            ))}
          </TableBody>
        </Table>
      </Scrollbars>
    </TableContainer>
  );
};

export default withStyles(styles)(DataTable);
