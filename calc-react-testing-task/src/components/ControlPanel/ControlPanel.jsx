import React from "react";
import { ChangeTheme, Wrapper, Text, Clear } from "./styled";

const ControlPanel = () => {
  return (
    <Wrapper>
      <Text large>Settings</Text>
      <Text>Switch theme</Text>
      <ChangeTheme>
        <Text>Change Theme</Text>
      </ChangeTheme>
      <Clear>
        <Text>Clear all history</Text>
      </Clear>
    </Wrapper>
  );
};

export default ControlPanel;
