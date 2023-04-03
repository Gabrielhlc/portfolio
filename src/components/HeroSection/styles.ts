import styled from "styled-components";

export const Container = styled.div`
    margin-left: 60px;
    margin-top: 120px;

    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 3.5rem;
`;

export const Subtitle = styled.h2`
    margin-top: 2rem;
    margin-left: 3.875rem;
    width: 54%;

    font-size: 2.25rem;
    color: ${({ theme }) => theme.gray};
`;

export const ButtonContainer = styled.div`
    margin-left: 6.75rem;
    margin-top: 4.5rem;
`;