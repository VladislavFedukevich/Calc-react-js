import React from "react";

import Header from "@components/Header/Header";
import Calculator from "@components/Calculator/Calculator";

import { TABS } from "@constants/tabs";

import { Wrapper } from "./styled";

const Home = () => {
    return (
        <Wrapper>
            <Header TABS={TABS} />
            <Calculator
                outputDisplay={[]}
                setOutputDisplay={() => {}}
                history={[]}
                setHistory={() => {}}
            />
        </Wrapper>
    );
};

export default Home;
