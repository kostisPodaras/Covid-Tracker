import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import palette from "./palette";

const muiTheme = createMuiTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: { xs: 360, sm: 768, md: 960, lg: 1366, xl: 1920 },
  },
  palette,
  shadows: [
    "none",
    "0px 1px 2px rgba(0, 0, 0, 0.12)",
    "0px 1px 8px rgba(0, 0, 0, 0.12)",
    "0px 1px 24px rgba(0, 0, 0, 0.12)",
    "0px 6px 16px rgba(0, 0, 0, 0.06)",
  ],
});

export default muiTheme;
