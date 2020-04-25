const styles = ({ palette, breakpoints }) => ({
  container: {
    height: 550,
    maxWidth: "100%",

    [breakpoints.up("lg")]: {
      maxWidth: "85%",
    },
  },
  cell: {
    backgroundColor: palette.black,
    color: palette.white,
  },
});

export default styles;
