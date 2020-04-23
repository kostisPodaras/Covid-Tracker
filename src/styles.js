const styles = ({ palette }) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  nightTheme: {
    backgroundColor: palette.black,
  },

  dayTheme: {
    backgroundColor: palette.white,
  },
});

export default styles;
