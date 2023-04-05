import React from "react";
import { connect } from "react-redux";

import { clearHistory } from "@utils/actions";

import { Wrapper, Text, ToggleTheme, ToggleHistory } from "./styled";

const ControlPanel = ({ toggleTheme, clearHistory }) => {
  const handleClearHistory = () => {
    clearHistory();
  };

  return (
    <Wrapper>
      <Text large>Settings</Text>
      <ToggleTheme onClick={toggleTheme}>
        <Text>Switch theme</Text>
      </ToggleTheme>
      <ToggleHistory onClick={handleClearHistory}>
        <Text>Clear all history</Text>
      </ToggleHistory>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearHistory: () => dispatch(clearHistory())
});

export default connect(null, mapDispatchToProps)(ControlPanel);
