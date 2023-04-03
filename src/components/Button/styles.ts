import styled from "styled-components";

export type ButtonSizeProps = "md" | "sm";

type Props = {
    size: ButtonSizeProps
}

export const Container = styled.button<Props>`
    width: ${({ size }) => size === "md" ? "280px" : "200px"};
    height: ${({ size }) => size === "md" ? "80px" : "60px"};

    font-size: ${({ size }) => size === "md" ? "28px" : "20px"};

    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme["linear-gradient"]};
    border-radius: 83px;
`;