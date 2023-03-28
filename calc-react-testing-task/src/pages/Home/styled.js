import styled from "styled-components";
import { NavLink as BaseNavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

export const Header_name = styled.h1``;

export const NavLink = styled(BaseNavLink)`
  font-size: 15px;
  width: 100px;
  height: 100%;
`

export const LinkText = styled.p`
  text-align: right;
  font-size: 15px;
  text-decoration: none;
  color: black;
`

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  height: 100%;
`
