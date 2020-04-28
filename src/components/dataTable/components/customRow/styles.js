const styles = ({ palette, breakpoints }) => ({
  avatar: {
    display: "inline-block",
    height: 20,
    width: 20,
    marginLeft: 4,
  },
  container: {
    maxWidth: 85,
    display: "flex",

    [breakpoints.up("md")]: {
      maxWidth: 105,
    },
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: palette.grey[400],
    },
  },
  cell: {
    borderRight: `1px solid ${palette.grey[500]}`,
    overflow: "hidden",
    padding: 5,

    [breakpoints.up("sm")]: {
      padding: 16,
    },
  },
  dailyCases: {
    color: palette.table.newCases,
  },
  dailyDeaths: {
    color: palette.table.newDeaths,
  },
  link: {
    color: "inherit",
  },
});
export default styles;
