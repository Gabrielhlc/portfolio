import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 4.5rem;
`;

export const Title = styled.h1`
    margin-bottom: 0.5rem;
    font-size: 3.5rem;
`;

export const Subtitle = styled.h2`
    margin-left: 3.875rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.gray};
    margin-bottom: 4rem; 
`;

export const ProjectsWrapper = styled.div`
    width: 100%;
    
    @media (min-width: 1520px) {
        margin-left: 6.75rem;
    margin-right: 6.75rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 1520px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;