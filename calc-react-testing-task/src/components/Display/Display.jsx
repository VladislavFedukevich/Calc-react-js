import React from "react";
import PropTypes from "prop-types";

import { Count, Wrapper } from "./styled";

const Display = ({ outputDisplay }) => {
    return (
        <Wrapper>
            <Count>{outputDisplay.map((el) => el) ?? null}</Count>
        </Wrapper>
    );
};

Display.propTypes = {
    outputDisplay: PropTypes.array.isRequired,
};

export default Display;
