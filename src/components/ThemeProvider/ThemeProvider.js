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
  :root {
    --color-white: ${({ theme }) => theme.colors.white};
    --color-gray-100: ${({ theme }) => theme.colors.gray[100]};
    --color-gray-300: ${({ theme }) => theme.colors.gray[300]};
    --color-gray-500: ${({ theme }) => theme.colors.gray[500]};
    --color-gray-700: ${({ theme }) => theme.colors.gray[700]};
    --color-gray-900: ${({ theme }) => theme.colors.gray[900]};
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-secondary: ${({ theme }) => theme.colors.secondary};
  }
`;
