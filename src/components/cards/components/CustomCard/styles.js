const styles = ({ palette }) => ({
  container: {
    maxWidth: 500,
    borderRadius: 10,
    margin: 20,
    borderBottom: `10px solid ${palette.recovered}`,

    "&:first-child": {
      borderBottom: `10px solid ${palette.infected}`,
    },

    "&:last-child": {
      borderBottom: `10px solid ${palette.deaths}`,
    },
  },
  rootCard: {
    height: "100%",
  },
  card: {
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
});

export default styles;
