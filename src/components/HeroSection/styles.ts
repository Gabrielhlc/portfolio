import styled, { Keyframes, keyframes } from "styled-components";

export const Container = styled.div`
    margin-left: 60px;
    margin-bottom: 150px;

    display: flex;
    align-items: center;
`;

export const InfoWrapper = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    margin-bottom: 2rem;
    font-size: 3.5rem;
`;

export const Subtitle = styled.h2`
    margin-left: 3.875rem;
    margin-bottom: 4.5rem;
    width: 80%;

    font-size: 2.25rem;
    color: ${({ theme }) => theme.gray};
`;

export const ButtonContainer = styled.div`
    margin-left: 6.75rem;
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
    box-shadow: 0px 5px 34px 5px rgba(0, 0, 0, 0.5);
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
  animation: ${rotate} 4s linear infinite;
`;

export const Orbit1 = styled.div`
    position: absolute;
    left: 135px;
    top: -80px;
`;

export const Orbit2 = styled.div`
    position: absolute;
    top: 300px;
    left: -20px;
`;
export const Orbit3 = styled.div`
    position: absolute;
    top: 300px;
    right: -20px;
`;