import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 137px;
    
    margin-bottom: 7.5rem;
    
    display: flex;
    align-items: center;
`;

export const Logo = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;

export const LogoText = styled.span`
    font-weight: 500;
    font-size: 1.75rem;
    @media (max-width: 1400px) {
        font-size: 1.5rem;
    }
`;

export const NavLink = styled.span`
    font-weight: 500;
    font-size: 2rem;
    @media (max-width: 992px) {
        font-size: 1.5rem;
    }
    
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
    flex: 1;
    /* margin: 0 auto; */
    display: flex;
    justify-content: center;
    @media (max-width: 1300px) {
        gap: 4rem;
    }
    gap: 6.125rem;
`;

export const Links = styled.div`
    margin-left: auto;
    display: flex;
    gap: 2rem;
`;