import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 2rem;

    @media (max-width: 576px) {
        margin-right: -4rem;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Text = styled.span`
    font-size: 1.5rem;
    @media (max-width: 1300px) {
        font-size: 1rem;
    }
    @media (max-width: 576px) {
        font-size: 0.75rem;
    }
`;

export const Links = styled.div`
    display: flex;
    gap: 2rem;
`;