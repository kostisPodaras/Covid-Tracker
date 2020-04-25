const styles = ({ palette, breakpoints }) => ({
  container: {
    height: 750,
    maxWidth: "100%",

    [breakpoints.up("lg")]: {
      maxWidth: "85%",
    },
  },
  cell: {
    backgroundColor: palette.black,
    color: palette.white,
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: palette.grey[400],
    },
  },
});

export default styles;
