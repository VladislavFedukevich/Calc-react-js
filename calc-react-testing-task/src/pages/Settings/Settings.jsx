import React from "react";

import PropTypes from "prop-types";
import ControlPanel from "@components/ControlPanel/ControlPanel";
import Header from "@components/Header/Header";

import { TABS } from "@constants/tabs";

import { Wrapper } from "./styled";

const Settings = ({ toggleTheme }) => {
    return (
        <Wrapper>
            <Header TABS={TABS} />
            <ControlPanel toggleTheme={toggleTheme} />
        </Wrapper>
    );
};

Settings.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
};

export default Settings;
