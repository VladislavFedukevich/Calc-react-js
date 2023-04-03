import React from "react";

import { Wrapper, Text, ToggleTheme, ToggleHistory } from "./styled";

const ControlPanel = () => {
  return (
    <Wrapper>
      <Text large>Settings</Text>
      <Text>Switch theme</Text>
      <ToggleTheme>
        <Text>Theme</Text>
      </ToggleTheme>
      <ToggleHistory>
        <Text>Clear all history</Text>
      </ToggleHistory>
    </Wrapper>
  );
};

export default ControlPanel;
