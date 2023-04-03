import { createGlobalStyle } from "styled-components";
import * as theme from "../styles/ThemeStyled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .light {
    background-color: ${theme.light.colors.header};
  }
  .dark {
    background-color: ${theme.dark.colors.header};
  }

  .active{
    border: 3px solid hsl(0, 0%, 87%);
  }
}`;
