import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: history;
  height: 100%;
  padding: 10px;
  border-left: 1px solid grey;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-size: 20px;
  margin: 0 0 20px 0;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
`;

export const Item = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 30px;
`;
