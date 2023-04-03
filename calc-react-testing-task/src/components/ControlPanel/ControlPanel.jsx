import React from "react";

import { Wrapper, Text, ToggleTheme, ToggleHistory } from "./styled";

import { light, dark } from "../../styles/ThemeStyled";

const ControlPanel = ({ toggleTheme }) => {
  return (
    <Wrapper>
      <Text large>Settings</Text>
      <ToggleTheme onClick={toggleTheme}>
        <Text>Dark theme</Text>
      </ToggleTheme>
      <ToggleTheme onClick={toggleTheme}>
        <Text>Light theme</Text>
      </ToggleTheme>
      <ToggleHistory>
        <Text>Clear all history</Text>
      </ToggleHistory>
    </Wrapper>
  );
};

export default ControlPanel;
