import React from "react";
import { Count, Wrapper } from "./styled";

const Display = ({ outputDisplay }) => {
    return (
        <Wrapper>
            <Count>{outputDisplay.map((el) => el) ?? null}</Count>
        </Wrapper>
    );
};

export default Display;
