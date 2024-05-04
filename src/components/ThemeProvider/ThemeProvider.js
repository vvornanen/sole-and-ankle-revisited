import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";
import { theme } from "../../theme";

export const ThemeProvider = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      {children}
      <ThemeVars />
    </StyledThemeProvider>
  );
};

const ThemeVars = createGlobalStyle`
  :root {}
`;
