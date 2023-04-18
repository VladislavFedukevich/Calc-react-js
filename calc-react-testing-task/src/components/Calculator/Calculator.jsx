import { useState, useEffect } from "react";
import { connect } from "react-redux";

import React from "react";
import Display from "@components/Display/Display";
import Keypad from "@components/Keypad/Keypad";
import History from "@components/History/History";

import { setOutputDisplay, setHistory } from "@utils/actions";

import { Wrapper } from "./styled";

const mapStateToProps = (state) => ({
    outputDisplay: state.outputDisplay,
    history: state.history,
});

const mapDispatchToProps = {
    setOutputDisplay,
    setHistory,
};

const Calculator = ({
    outputDisplay,
    setOutputDisplay,
    history,
    setHistory,
}) => {
    const indexOperator = (expression) => {
        for (let i = 0; i < expression.length; i++) {
            if (["*", "/", "+", "-"].includes(expression[i])) return i;
        }
        return -1;
    };

    const buildExpressionTree = (expression) => {
        const index = indexOperator(expression);

        if (index < 0) return { value: expression };
        else {
            const operator = expression[index];
            return {
                value: operator,
                left: buildExpressionTree(expression.slice(0, index).trim()),
                right: buildExpressionTree(expression.slice(index + 1).trim()),
            };
        }
    };

    const evaluateExpression = (node) => {
        if (!node) return 0;

        if (!isNaN(node.value)) return parseFloat(node.value);

        let leftValue = evaluateExpression(node.left);
        let rightValue = evaluateExpression(node.right);

        switch (node.value) {
            case "+":
                return leftValue + rightValue;
            case "-":
                return leftValue - rightValue;
            case "*":
                return leftValue * rightValue;
            case "/":
                return leftValue / rightValue;
            default:
                return 0;
        }
    };

    const handleCalculate = () => {
        const tree = buildExpressionTree(outputDisplay.join(""));
        const result = evaluateExpression(tree);
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

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
