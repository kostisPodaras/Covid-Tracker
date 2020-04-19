const styles = () => ({
  container: {
    maxWidth: 500,
    borderRadius: 10,
    margin: 20,
    borderBottom: "10px solid rgba(0, 255, 0, 0.5)",

    "&:first-child": {
      borderBottom: "10px solid rgba(0, 0, 255, 0.5)",
    },

    "&:last-child": {
      borderBottom: "10px solid rgba(255, 0, 0, 0.5)",
    },
  },
  rootCard: {
    height: "100%",
  },
});

export default styles;
