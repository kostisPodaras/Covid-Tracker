import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import styles from "./styles";

type Props = {
  classes: Object,
};

const Cards = ({ classes }: Props) => {
  return <div>Card component</div>;
};

export default withStyles(styles)(Cards);
