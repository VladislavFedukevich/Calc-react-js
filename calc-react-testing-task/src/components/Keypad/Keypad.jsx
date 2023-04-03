import React from "react";
import { Wrapper, Button } from "./styled";
import { store } from "../../constants/key_value";

const Keypad = ({ setOutputDisplay, outputDisplay }) => {
  const changeDisplay = (e) => {
    const mathString = outputDisplay.join('')
    // debugger
    if (outputDisplay.length === 1 && outputDisplay[0] == 0) setOutputDisplay([e.target.textContent])
    else if (e.target.textContent === '=') setOutputDisplay([eval(mathString)])
    else if (e.target.textContent === ')' && !mathString.includes(')')) return
    else if (!/[0-9]/g.test(e.target.textContent) && !/[0-9]/g.test(mathString[mathString.length - 1])) return
    else if (e.target.textContent === 'CE') setOutputDisplay([0])
    else {
      setOutputDisplay([...outputDisplay, e.target.textContent])
    }
  }

  return (
    <Wrapper>
      {store.buttons.map((item, i) => {
        return (
          <Button key={Math.random()} value={item.val} onClick={changeDisplay}>
            {item.val}
          </Button>
        ) ?? null;
      })}
    </Wrapper>
  );
};

export default Keypad;
