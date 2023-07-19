import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 7.5rem;

    @media (max-width: 576px) {
        margin-bottom: 5.5rem; 
    }
`;

export const Title = styled.h1`
    margin-bottom: 1rem;
    font-size: 3.5rem;

    @media (max-width: 576px) {
        font-size: 2rem;
    }
`;

export const Caption = styled.h2`
    margin-left: 3.875rem;
    
    margin-bottom: 4rem; 

    font-size: 1.5rem;

    @media (max-width: 576px) {
        margin-left: 2rem;
        margin-bottom: 2.5rem; 
        margin-right: -3rem;
        font-size: 1rem;
    }

    line-height: 160%;
    color: ${({ theme }) => theme.gray};
`;

export const StackContainer = styled.div`
    margin-left: 6.75rem;
    margin-right: 6.75rem;
    @media (max-width: 576px) {
        margin-left: 2rem;
        margin-right: -3rem;
    }

    margin-bottom: 8.25rem;
`;

export const Stack = styled.div`
    margin-bottom: 2.5rem;

    display: flex;
    flex-direction: column;
`;

export const StackTexts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StackTitle = styled.span`
    font-size: 1.5rem;
    @media (max-width: 576px) {
        font-size: 1rem;
    }
    line-height: 54px;
    margin-left: 25px;
`;

export const StackLevel = styled.span`
    font-size: 1rem;
    line-height: 36px;
    margin-right: 4.125rem;

    @media (max-width: 576px) {
        margin-right: 1rem;
    }
`;

export const StackTrack = styled.div`
    width: 100%;
    height: 1rem;

    background: ${({ theme }) => theme.stackTrack};
    border-radius: 83px;
`;

type ProgressProps = {
    progress: string;
    inView: boolean;
}

export const StackProgress = styled.div<ProgressProps>`
    width: ${({ inView, progress }) => inView ? progress : '0%'};
    
    transition: width 3s ease;
    
    height: 1rem;

    background: ${({ theme }) => theme["linear-gradient"]};
    border-radius: 83px;
`;

export const AdditionalTitle = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 4.5rem;

    @media (max-width: 1300px) {
        font-size: 1.75rem;
    }

    @media (max-width: 576px) {
        margin-bottom: 3.5rem;
        font-size: 1.25rem;
    }
    
`;

export const AdditionalGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.5rem;
    @media (max-width: 1300px) {
        grid-gap: 1.25rem;
    }
`;

export const AdditionalNode = styled.span`
    margin-left: 6.75rem;
    
    font-size: 1.75rem;
    @media (max-width: 1300px) {
        margin-left: 3.875rem;
        font-size: 1.15rem;
    }

    @media (max-width: 576px) {
        margin-left: 2rem;
        margin-right: -4rem;
        font-size: 0.85rem;
    }
`;