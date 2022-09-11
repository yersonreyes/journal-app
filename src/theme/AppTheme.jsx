import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Theme } from "./theme";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
