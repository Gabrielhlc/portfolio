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