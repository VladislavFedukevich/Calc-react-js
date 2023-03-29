import React from "react";
import { Header_name, LinkText, List, NavLink } from "../../pages/Home/styled";
import { Container } from "./styled";

import { TABS } from "../../constants/constants";

const Header = () => {
  return (
    <Container>
      <Header_name>Calculator</Header_name>
      <List>
        {TABS.map((tab, i) => (
          <NavLink key={i} to={tab.route}>
            <LinkText>{tab.text}</LinkText>
          </NavLink>
        ))}
      </List>
    </Container>
  );
};

export default Header;
