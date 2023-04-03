import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  grid-area: keypad;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  width: 90%;
  margin: auto;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 70%;
  border-radius: 40%;
  cursor: pointer;
  background: grey;
  color: black;
  font-size: 40px;
`
