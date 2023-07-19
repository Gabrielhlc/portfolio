import styled from "styled-components";

export const Container = styled.div`
    margin-right: 8rem;
    margin-bottom: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Text = styled.span`
    font-size: 1.5rem;
    @media (max-width: 1300px) {
        font-size: 1rem;
    }
`;

export const Links = styled.div`
    display: flex;
    gap: 2rem;
`;