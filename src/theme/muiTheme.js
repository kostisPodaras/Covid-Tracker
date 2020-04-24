import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import palette from "./palette";

const theme = (mode) => {
  const muiTheme = createMuiTheme({
    breakpoints: {
      keys: ["xs", "sm", "md", "lg", "xl"],
      values: { xs: 360, sm: 768, md: 960, lg: 1366, xl: 1920 },
    },
    palette: { ...palette, type: mode },
  });
  return muiTheme;
};

export default theme;
