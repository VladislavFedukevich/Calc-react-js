import { createGlobalStyle } from "styled-components";
import * as theme from "../styles/ThemeStyled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`;
