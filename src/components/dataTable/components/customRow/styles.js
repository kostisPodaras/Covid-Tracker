const styles = ({ palette }) => ({
  avatar: {
    display: "inline-block",
    height: 20,
    width: 20,
    marginLeft: 4,
  },
  container: {
    minWidth: 105,
    display: "flex",
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: palette.grey[400],
    },
  },
});
export default styles;
