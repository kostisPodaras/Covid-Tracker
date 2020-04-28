import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import styles from "./styles";

type Props = {
  classes: Object,
};

const CountryDetails = ({ classes }: Props) => {
  return <div>details router component</div>;
};

export default withStyles(styles)(CountryDetails);
