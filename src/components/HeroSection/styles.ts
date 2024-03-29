import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    margin-bottom: 9.5rem;

    display: flex;
    align-items: center;
`;

export const InfoWrapper = styled.div`
    width: 70%;

    @media (max-width: 1300px) {
        width: 100%;
    }

    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    margin-bottom: 2rem;
    font-size: 3.5rem;
    @media (max-width: 992px) {
        font-size: 2.5rem;
    }
`;

export const Subtitle = styled.h2`
    margin-left: 3.875rem;
    margin-bottom: 4.5rem;
    width: 80%;

    @media (max-width: 992px) {
        font-size: 1.75rem;
        margin-bottom: 2.5rem;
    }

    @media (max-width: 576px) {
        font-size: 1.5rem;
        margin-left: 2rem;
        width: 100%;
    }

    font-size: 2.25rem;
    
    color: ${({ theme }) => theme.gray};
`;

export const ProfileHidden = styled.div`
    margin: 0 auto;
    margin-bottom: 2.5rem;
    @media (max-width: 576px){
        margin-right: 1rem;
    }
    
    display: flex;
    justify-content: center;

    border-radius: 50%;
    overflow: hidden;
`;

export const ButtonContainer = styled.div`
    margin-left: 6.75rem;
    @media (max-width: 576px) {
        margin-left: 3.875rem;
    }
`;

export const ProfileContainer = styled.div`
    position: relative;
`;

export const Profile = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0px 5px 34px 5px rgba(0, 0, 0, 0.7);
`;

const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
`;

export const OrbitWrapper = styled.div`
  z-index: 3;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  animation: ${rotate} 6s linear infinite;

`;

const rotation = keyframes`
    0% {
        transform: rotate(360deg);
    }
`

export const Orbit1 = styled.div`
    position: absolute;
    left: 135px;
    top: -80px;
`;

export const Orbit2 = styled.div`
    position: absolute;
    top: 300px;
    left: -20px;
    animation: ${rotation} 6s linear infinite;
`;
export const Orbit3 = styled.div`
    position: absolute;
    top: 300px;
    right: -20px;
    animation: ${rotation} 6s linear infinite;
`;