import { ButtonSizeProps, Container } from "./styles";

interface ButtonProps {
    text: string;
    size: ButtonSizeProps;
}

export function Button({ text, size }: ButtonProps) {
    return (
        <Container size={size}>
            {text}
        </Container>
    )
}