import styled from "styled-components";

export const Container = styled.div`
    margin-left: 60px;
    margin-bottom: 150px;

    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    margin-bottom: 2rem;
    font-size: 3.5rem;
`;

export const Subtitle = styled.h2`
    margin-left: 3.875rem;
    margin-bottom: 4.5rem;
    width: 54%;

    font-size: 2.25rem;
    color: ${({ theme }) => theme.gray};
`;

export const ButtonContainer = styled.div`
    margin-left: 6.75rem;
`;