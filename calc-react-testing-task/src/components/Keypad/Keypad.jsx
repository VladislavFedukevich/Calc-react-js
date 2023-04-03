import React from "react";
import { Wrapper } from "./styled";
import Button from "../Button/Button";
import { store } from "../../constants/key_value";

const Keypad = () => {
  return (
    <Wrapper>
      {store.buttons.map((item, i) => {
        return (
          <Button key={i} value={item.val}>
            {item.val}
          </Button>
        );
      })}
    </Wrapper>
  );
};

export default Keypad;
