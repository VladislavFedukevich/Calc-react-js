import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";

export const Text = styled.p`
  font-size: ${(props) => (props.large ? "35px" : "18px")};
  color: black;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 30px 0 0 30px;
  flex-direction: column;
  gap: 30px;
`;

export const Toggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  background-color: grey;
  border-radius: 5px;
  cursor: pointer;
`;

export const Clear = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  background-color: grey;
  border-radius: 5px;
  cursor: pointer;
`
