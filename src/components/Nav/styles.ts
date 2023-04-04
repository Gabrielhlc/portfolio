import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 137px;
    
    margin-bottom: 120px;
    
    display: flex;
    align-items: center;
`;

export const Logo = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
`;

export const LogoText = styled.span`
    font-weight: 500;
    font-size: 2rem;
`;

export const NavLink = styled.span`
    font-weight: 500;
    font-size: 2rem;
    
    &:hover {
        cursor: pointer;
        border-bottom-style: solid;
        border-bottom-width: 2px;
        border-image: ${({ theme }) => theme["linear-gradient"]} 1;
    }
`;

export const NavItems = styled.div`
    margin-left: 13.625rem;
    display: flex;
    gap: 6.125rem;
`;

export const Links = styled.div`
    margin-left: auto;
    display: flex;
    gap: 2rem;
`;