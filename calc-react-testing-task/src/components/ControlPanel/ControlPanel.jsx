import React from "react";

import { Wrapper, Text, ToggleTheme, ToggleHistory } from "./styled";

const ControlPanel = ({ toggleTheme }) => {
  return (
    <Wrapper>
      <Text large>Settings</Text>
      <ToggleTheme onClick={toggleTheme}>
        <Text>Switch theme</Text>
      </ToggleTheme>
      <ToggleHistory>
        <Text>Clear all history</Text>
      </ToggleHistory>
    </Wrapper>
  );
};

export default ControlPanel;
