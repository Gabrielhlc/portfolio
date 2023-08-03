import styled, { keyframes } from "styled-components";

export type ButtonSizeProps = "md" | "sm" | "xs";

type Props = {
    size: ButtonSizeProps
}

const hover = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0.8;
    }
`;

export const Button = styled.button<Props>`
    width: ${({ size }) => size === "md" ? "280px" : (size === "sm" ? "200px" : "180px")};
    height: ${({ size }) => size === "md" ? "80px" : (size === "sm" ? "60px" : "50px")};

    font-size: ${({ size }) => size === "md" ? "28px" : "20px"};

    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme["linear-gradient"]};
    border-radius: 83px;

    &:hover {
        cursor: pointer;
        
        animation: ${hover} 0.2s linear;
        animation-fill-mode: forwards;
    }
`;

