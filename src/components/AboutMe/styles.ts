import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 12rem;

    @media (max-width: 576px) {
        margin-bottom: 8rem;
    }
`;

export const Title = styled.h1`
    margin-bottom: 0.5rem;    
    font-size: 3.5rem;
    @media (max-width: 1300px) {
        font-size: 2.5rem;
    }
    @media (max-width: 576px) {
        font-size: 2rem;
    }
`;

export const Subtitle = styled.h2`
    margin-left: 3.875rem;
    margin-bottom: 4rem; 

    font-size: 1.5rem;
    @media (max-width: 1300px) {
        font-size: 1.25rem;
    }
    @media (max-width: 576px) {
        margin-left: 2rem;
        margin-bottom: 2.5rem; 
        font-size: 1rem;
    }

    color: ${({ theme }) => theme.gray};
`;

export const Description = styled.p`
    margin-left: 6.75rem;
    margin-bottom: 4rem;
    width: 75%;

    font-size: 1.75rem;
    @media (max-width: 1300px) {
        font-size: 1.25rem;
    }

    @media (max-width: 576px) {
        width: 100%;
        margin-left: 3rem;
        font-size: 1rem;
    }
`;

export const Timeline = styled.div`
    width: 50%;
    display: grid;
    grid-row-gap: 2rem;

    margin-left: 6.75rem;

    @media (max-width: 576px) {
        margin-left: 3rem;
        width: 100%;
    }
    
    border-left: 3px solid #945DD6;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
`;

export const TimelineYear = styled.span`
    width: max-content;
    padding: 0.5rem 1.5rem;
    margin-bottom: 1.25rem;

    color: #fff;
    background-color: #945DD6;
    font-weight: 400;
`;

export const TimelineCards = styled.div`
    display: grid;
    grid-row-gap: 2rem;

    overflow: hidden;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
`;

export const TimelineCard = styled.div`
    position: relative;
    padding: 1.5rem 1.5rem 1.25rem;
    margin-left:  1rem;

    border-left: 3px solid #13ADC7;
    box-shadow:  0 1px 3px 0 rgba(0, 0, 0, .12), 0 1px 2px 0 rgba(0, 0, 0, .24);
    background-color: #212121;
    border-radius: 2px;

    &::before {
        content: "";
        width: 100%;
        height: 2px;
        background-color: #356BC6;

        position: absolute;
        top: 1rem;
        left: -50%;
        z-index: -1;
    }
`;

export const TimeDate = styled.header`
    width: fit-content;
    color: #fff;
    padding: 0.25rem 1.25rem 0.25rem;
    background-color: #3A3A3A;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
`;

export const TimeContent = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
`;

export const ContentTitle = styled.p`
    color: #fff;    
    font-size: 1.3rem;
`;

export const ContentWorkload = styled.p`
    color: #fff; 
    font-size: 1rem;
    opacity: 0.8;
`;

export const ButtonContainer = styled.div`
    margin-top: 1rem;
    
    @media (max-width: 576px) {
        display: flex;
        justify-content: center;
    }
`;