import React, { useEffect, useState } from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import styles from "./styles";

type Props = {
  classes: Object,
};

const Country = ({ classes }: Props) => {
  return <p>country comp</p>;
};

export default withStyles(styles)(Country);
