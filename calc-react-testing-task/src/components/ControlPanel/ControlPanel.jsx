import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { clearHistory } from "@utils/actions";

import { Wrapper, Text, ToggleTheme, ToggleHistory } from "./styled";

const mapDispatchToProps = (dispatch) => ({
    clearHistory: () => dispatch(clearHistory()),
});

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

ControlPanel.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
    clearHistory: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ControlPanel);
