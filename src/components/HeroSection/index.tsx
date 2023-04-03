import { Button } from "../Button";
import { ButtonContainer, Container, Subtitle, Title } from "./styles";

export function HeroSection() {
    return (
        <Container>
            <Title>Welcome to my portfolio page!</Title>

            <Subtitle>My name is Gabriel Henrique Lopes Carvalho and I'm a Frontend developer</Subtitle>

            <ButtonContainer>
                <Button size="md" text="Let's begin!" />
            </ButtonContainer>
        </Container>
    )
}