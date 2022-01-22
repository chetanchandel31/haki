import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global.styles";

type HakiProviderProps = {
  children: ReactNode;
  theme?: Object; // TODO: change
};

export const defaultTheme = {
  primary: {
    main: "#ffffff",
  },
  secondary: {},
  danger: {},
  warning: {},
};

/** applies global styles and ability to customize theme for haki components*/
const HakiProvider = (props: HakiProviderProps) => {
  const { children, theme } = props;

  const finalTheme = { ...defaultTheme, theme };

  return (
    <ThemeProvider theme={finalTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default HakiProvider;
