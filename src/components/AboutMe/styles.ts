import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 12rem;
`;

export const Title = styled.h1`
    margin-bottom: 0.5rem;    
    font-size: 3.5rem;
    @media (max-width: 1300px) {
        font-size: 2.5rem;
    }
`;

export const Subtitle = styled.h2`
    margin-left: 3.875rem;
    margin-bottom: 4rem; 

    font-size: 1.5rem;
    @media (max-width: 1300px) {
        font-size: 1.25rem;
    }

    color: ${({ theme }) => theme.gray};
`;

export const Description = styled.p`
    margin-left: 6.75rem;
    width: 75%;

    font-size: 1.75rem;
    @media (max-width: 1300px) {
        font-size: 1.25rem;
    }
`;