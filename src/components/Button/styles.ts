import styled, { keyframes } from "styled-components";

export type ButtonSizeProps = "md" | "sm";

type Props = {
    size: ButtonSizeProps
}

const hover = keyframes`
    0% {
        box-shadow: 0px 5px 34px 5px rgba(0, 0, 0, 0);
        opacity: 1;
    }
    100% {
        box-shadow: 0px 5px 34px 5px rgba(0, 0, 0, 0.9);
        opacity: 0.8;
    }
`;

export const Button = styled.button<Props>`
    width: ${({ size }) => size === "md" ? "280px" : "200px"};
    height: ${({ size }) => size === "md" ? "80px" : "60px"};

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

