const styles = ({ palette }) => ({
  container: {
    height: 500,
    maxWidth: "85%",
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
