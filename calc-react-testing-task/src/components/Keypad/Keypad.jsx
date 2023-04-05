import React from "react";
import { connect } from "react-redux";
import { setOutputDisplay } from "@utils/actions";
import { Wrapper, Button } from "./styled";
import { store } from "@constants/key_value";

const Keypad = ({ setOutputDisplay, outputDisplay, onCalculate }) => {
  const changeDisplay = (e) => {
    const mathString = outputDisplay.join("");
    // debugger
    if (outputDisplay.length === 1 && outputDisplay[0] == 0)
      setOutputDisplay([e.target.textContent]);
    else if (e.target.textContent === "=") setOutputDisplay([eval(mathString)]);
    else if (e.target.textContent === ")" && !mathString.includes(")")) return;
    else if (
      !/[0-9]/g.test(e.target.textContent) &&
      !/[0-9]/g.test(mathString[mathString.length - 1])
    )
      return;
    else if (e.target.textContent === "CE") setOutputDisplay([0]);
    else {
      setOutputDisplay([...outputDisplay, e.target.textContent]);
    }
  };

  return (
    <Wrapper>
      {store.buttons.map((item, i) => {
        return (
          (
            <Button
              key={item.val}
              onClick={item.val === "=" ? onCalculate : changeDisplay}
            >
              {item.val}
            </Button>
          ) ?? null
        );
      })}
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  outputDisplay: state.outputDisplay,
});

const mapDispatchToProps = {
  setOutputDisplay,
};

export default connect(mapStateToProps, mapDispatchToProps)(Keypad);
