const styles = () => ({
  container: {
    position: "relative",
  },
  switcher: {
    zIndex: 2,
    position: "fixed",
    right: "70px",
    top: "10px",

    "@media (max-width: 600px)": {
      right: 0,
    },
  },
});

export default styles;
