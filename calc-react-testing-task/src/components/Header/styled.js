import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";

export const Wrapper = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.header};
    border-bottom: 3px solid ${({ theme }) => theme.colors.border};
    margin: 0;
    padding: 0 20px 0 20px;
`;
export const Header_name = styled.h1``;

export const NavLink = styled(BaseNavLink)`
    font-size: 18px;
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    &.active {
        color: ${({ theme }) => theme.colors.active};
        font-weight: ${({ theme }) => theme.colors.bold};
    }
    &:hover {
        color: ${({ theme }) => theme.colors.link};
    }
`;

export const LinkText = styled.p``;

export const List = styled.div`
    display: flex;
    width: 250px;
    height: 100%;
`;
