import styled from "styled-components";

export const Text = styled.p`
    font-size: ${(props) => (props.large ? "35px" : "18px")};
    color: ${({ theme }) => theme.colors.settings};
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    gap: 30px;
`;

export const ToggleTheme = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.header};
    border-radius: 5px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
`;

export const ToggleHistory = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.header};
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
`;
