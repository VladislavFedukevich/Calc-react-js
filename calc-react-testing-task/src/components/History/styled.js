import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: history;
  height: 100%;
  padding: 27px 0 0 0;
  border-left: 1px solid grey;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-size: 28px;
  margin: 0 0 20px 0;
  font-weight: ${({theme}) => theme.colors.bold};
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid grey;
  padding: 10px 0 0 0;
`;

export const Item = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 35px;
`;
