import styled from "styled-components";

export const Container = styled.div`
    width: 550px;
    height: 700px;

    padding: 25px;
    background: transparent;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;

    margin-bottom: 100px;
`;


export const Title = styled.span`
    font-size: 2rem;
`;

export const Divider = styled.div`
    width: 300px;
    height: 4px;
    background: ${({ theme }) => theme["linear-gradient"]};
    border-radius: 83px;
`;

export const Description = styled.p`
    font-size: 1.75rem;
`;