import styled from "styled-components";

export const Container = styled.main`
    @media only screen and (max-width: 768px) {
        width: 93%;
    }

    @media (max-width: 576px) {
        width: 100%;
    }
    
    width: 86.25%;
    margin: 0 auto;
`;

export const PageLayout = styled.div`
    margin-left: 3.75rem;
    @media only screen and (max-width: 768px) {
        margin-left: 2rem;
    }
`;