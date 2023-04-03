import styled from "styled-components";

export const Container = styled.div`
    margin-left: 60px;
    margin-top: 120px;
    margin-bottom: 200px;
`;

export const Title = styled.h1`
    margin-bottom: 100px;    
    font-size: 3.5rem;
`;

export const StackContainer = styled.div`
    margin-left: 108px;
    margin-right: 108px;
    margin-bottom: 132px;
`;

export const Stack = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;
`;

export const StackTexts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StackTitle = styled.span`
    font-size: 1.5rem;
    line-height: 54px;
    margin-left: 25px;
`;

export const StackLevel = styled.span`
    font-size: 1rem;
    line-height: 36px;
    margin-right: 66px;
`;

export const StackTrack = styled.div`
    width: 100%;
    height: 1rem;

    background: ${({ theme }) => theme.stackTrack};
    border-radius: 83px;
`;

type ProgressProps = {
    progress: string;
}

export const StackProgress = styled.div<ProgressProps>`
    width: ${({ progress }) => progress};
    height: 1rem;

    background: ${({ theme }) => theme["linear-gradient"]};
    border-radius: 83px;
`;

export const AdditionalTitle = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 4.5rem;
`;

export const AdditionalGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.5rem;
`;

export const AdditionalNode = styled.span`
    font-size: 1.75rem;
    margin-left: 108px;
`;