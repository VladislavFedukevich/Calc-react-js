import React from "react";
import { Header_name, LinkText, List, NavLink, Wrapper } from "./styled";

import { TABS } from "../../constants/tabs";

const Header = () => {
  return (
    <Wrapper>
      <Header_name>Calculator</Header_name>
      <List>
        {TABS.map((tab, i) => (
          <NavLink key={i} to={tab.route}>
            <LinkText>{tab.text}</LinkText>
          </NavLink>
        ))}
      </List>
    </Wrapper>
  );
};

export default Header;
