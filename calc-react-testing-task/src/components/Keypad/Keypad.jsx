import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setOutputDisplay } from "@utils/actions";
import { store } from "@constants/key_value";

import { Wrapper, Button } from "./styled";

const mapStateToProps = (state) => ({
    outputDisplay: state.outputDisplay,
});

const mapDispatchToProps = {
    setOutputDisplay,
};

const Keypad = ({ setOutputDisplay, outputDisplay, onCalculate }) => {
    const [isCalculatorOn, setIsCalculatorOn] = useState(true);

    const changeDisplay = (e) => {
        if (!isCalculatorOn && e.target.textContent !== "C") {
            return;
        }

        const mathString = outputDisplay.join("");

        if (
            outputDisplay.length === 1 &&
            outputDisplay[0] == 0 &&
            e.target.textContent === "CE"
        ) {
            return;
        } else if (outputDisplay.length === 1 && outputDisplay[0] == 0) {
            setOutputDisplay([e.target.textContent]);
        } else if (e.target.textContent === ")" && !mathString.includes(")")) {
            return;
        } else if (
            !/[0-9]/g.test(e.target.textContent) &&
            !/[0-9]/g.test(mathString[mathString.length - 1])
        ) {
            return;
        } else if (e.target.textContent === "CE") {
            setOutputDisplay([0]);
        } else {
            setOutputDisplay([...outputDisplay, e.target.textContent]);
        }
    };

    const toggleCalculator = () => {
        setIsCalculatorOn(!isCalculatorOn);
        if (!isCalculatorOn) {
            setOutputDisplay([0]);
            console.log("on");
        } else {
            setOutputDisplay([]);
            console.log("off");
        }
    };

    return (
        <Wrapper>
            {store.buttons.map((item, i) => {
                return (
                    <Button
                        key={item.val}
                        onClick={
                            item.val === "="
                                ? onCalculate
                                : item.val === "C"
                                ? toggleCalculator
                                : changeDisplay
                        }
                        disabled={!isCalculatorOn && item.val !== "C"}
                    >
                        {item.val}
                    </Button>
                );
            })}
        </Wrapper>
    );
};

Keypad.propTypes = {
    setOutputDisplay: PropTypes.func.isRequired,
    outputDisplay: PropTypes.array.isRequired,
    onCalculate: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Keypad);
