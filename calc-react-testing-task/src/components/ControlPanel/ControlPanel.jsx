import React from "react";
import { ChangeTheme, Wrapper, Text, Clear } from "./styled";

const ControlPanel = () => {
  return (
    <Wrapper>
      <Text large>Settings</Text>
      <Text>Switch theme</Text>
      <Toggle>
        <Text>Change Theme</Text>
      </Toggle>
      <Toggle>
        <Text>Clear all history</Text>
      </Toggle>
    </Wrapper>
  );
};

export default ControlPanel;
