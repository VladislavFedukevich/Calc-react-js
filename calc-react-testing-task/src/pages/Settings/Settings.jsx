import React from "react";
import ControlPanel from "../../components/ControlPanel/ControlPanel";
import Header from "../../components/Header/Header";
import { Wrapper } from "./styled";

const Settings = ({ toggleTheme }) => {
  return (
    <Wrapper>
      <Header />
      <ControlPanel toggleTheme={toggleTheme} />
    </Wrapper>
  );
};

export default Settings;
