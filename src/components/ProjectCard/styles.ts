import styled from "styled-components";

export const Container = styled.div`
    width: 550px;
    height: 750px;

    @media (max-width: 576px) {
        width: 440px;
        height: 650px;
        margin-right: -4rem;
    }

    padding: 25px;
    background: transparent;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;

    margin-bottom: 6.25rem;
`;


export const Title = styled.span`
    font-size: 1.5rem;
`;

export const Tags = styled.div`
    width: 100%;
    margin-top: -10px;

    display: flex;
    gap: 0.5rem;
    justify-content: center;
`;

export const Tag = styled.span`
    padding: 4px 12px;

    background-color: ${({ theme }) => theme.stackTrack};
    color: ${({ theme }) => theme.gray};
    border-radius: 83px;
    
`;

export const Divider = styled.div`
    width: 300px;
    height: 4px;
    background: ${({ theme }) => theme["linear-gradient"]};
    border-radius: 83px;
`;

export const Description = styled.p`
    font-size: 1.75rem;

    @media (max-width: 576px) {
        font-size: 1.25rem;
    }
`;
