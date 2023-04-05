import React from "react";

import Header from "@components/Header/Header";
import { Wrapper } from "./styled";
import Calculator from "@components/Calculator/Calculator";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Calculator />
    </Wrapper>
  );
};

export default Home;
