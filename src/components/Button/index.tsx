import Link from "next/link";
import { ButtonSizeProps, Button as ButtonContainer } from "./styles";

interface ButtonProps {
    text: string;
    size: ButtonSizeProps;
    onClickURL: string;
}

export function Button({ text, size, onClickURL }: ButtonProps) {
    let target = '_blank'
    if (onClickURL === '#projects') {
        target = ''
    }
    return (
        <Link href={onClickURL} target={target} style={{ marginTop: 'auto' }}>
            <ButtonContainer size={size}>
                {text}
            </ButtonContainer>
        </Link>
    )
}