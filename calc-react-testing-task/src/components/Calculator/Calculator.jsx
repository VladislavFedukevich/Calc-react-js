import { useState, useEffect } from "react";
import { connect } from "react-redux";

import React from "react";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";
import History from "../History/History";

import { setOutputDisplay, setHistory } from "../../utils/actions";

import { Wrapper } from "./styled";

const Calculator = ({ outputDisplay, setOutputDisplay, history, setHistory }) => {
  const handleCalculate = () => {
    const result = eval(outputDisplay.join(""));
    setHistory([...history, `${outputDisplay.join("")}=${result}`]);
    setOutputDisplay([result.toString()]);
  };

  useEffect(() => {
    console.log(outputDisplay);
  }, [outputDisplay]);

  return (
    <Wrapper>
      <Display outputDisplay={outputDisplay} />
      <Keypad
        outputDisplay={outputDisplay}
        setOutputDisplay={setOutputDisplay}
        onCalculate={handleCalculate}
      />
      <History history={history} />
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  outputDisplay: state.outputDisplay,
  history: state.history,
});

const mapDispatchToProps = {
  setOutputDisplay,
  setHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
