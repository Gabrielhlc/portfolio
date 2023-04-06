import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 137px;
    
    margin-bottom: 7.5rem;
    
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
        background-image: ${({ theme }) => theme["linear-gradient"]};
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;
        transition: color 0.3s ease;

        cursor: pointer;
    }
`;

export const NavItems = styled.div`
    margin: 0 auto;
    display: flex;
    gap: 6.125rem;
`;

export const Links = styled.div`
    margin-left: auto;
    display: flex;
    gap: 2rem;
`;