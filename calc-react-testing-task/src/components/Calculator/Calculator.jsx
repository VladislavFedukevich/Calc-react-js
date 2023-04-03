import { useState, useEffect } from "react";

import React from "react";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";
import History from "../History/History";

import { Wrapper } from "./styled";

const Calculator = () => {
  const [outputDisplay, setOutputDisplay] = useState(["0"]);

  useEffect(() => {
    console.log(outputDisplay);
  }, [outputDisplay]);

  return (
    <Wrapper>
      <Display outputDisplay={outputDisplay} />
      <Keypad outputDisplay={outputDisplay} setOutputDisplay={setOutputDisplay} />
      <History />
    </Wrapper>
  );
};

export default Calculator;
