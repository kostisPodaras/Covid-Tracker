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
});

export default styles;
