import Image from "next/image";
import { Button } from "../Button";

import reactSvg from '../../assets/react.svg';
import typescriptSvg from '../../assets/typescript.svg';
import nextSvg from '../../assets/next.svg';

import {
    ButtonContainer,
    Container,
    InfoWrapper,
    Orbit1,
    Orbit2,
    Orbit3,
    OrbitWrapper,
    Profile,
    ProfileContainer,
    Subtitle,
    Title
} from "./styles";

export function HeroSection() {
    return (
        <Container>
            <InfoWrapper>
                <Title>Welcome to my portfolio page!</Title>

                <Subtitle>My name is Gabriel Henrique Lopes Carvalho and I'm a Frontend developer</Subtitle>

                <ButtonContainer>
                    {/* único jeito que encontrei para "quebrar" o protocolo do href do botão */}
                    <Button size="md" text="Let's begin!" onClickURL="#projects" />
                </ButtonContainer>
            </InfoWrapper>

            <ProfileContainer>
                <Profile>
                    <Image src="https://github.com/Gabrielhlc.png" alt="Profile" width={350} height={350} />
                </Profile>

                <OrbitWrapper>
                    <Orbit1>
                        <Image src={reactSvg} alt="React logo" width={70} height={70} />
                    </Orbit1>
                    <Orbit2>
                        <Image src={typescriptSvg} alt="React logo" width={60} height={60} />
                    </Orbit2>
                    <Orbit3>
                        <Image src={nextSvg} alt="React logo" width={60} height={60} />
                    </Orbit3>
                </OrbitWrapper>

            </ProfileContainer>
        </Container>
    )
}