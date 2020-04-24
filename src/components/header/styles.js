const styles = () => ({
  container: {
    position: "relative",
  },
  switcher: {
    position: "absolute",
    right: "70px",
    top: "10px",

    "@media (max-width: 600px)": {
      right: 0,
    },
  },
});

export default styles;