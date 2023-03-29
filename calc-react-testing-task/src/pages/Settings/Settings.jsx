import React from "react";
import ControlPanel from "../../components/ControlPanel/ControlPanel";
import Header from "../../components/Header/Header";
import { Wrapper} from "./styled";

const Settings = () => {
  return (
    <Wrapper>
      <Header />
      <ControlPanel />
    </Wrapper>
  );
};

export default Settings;
