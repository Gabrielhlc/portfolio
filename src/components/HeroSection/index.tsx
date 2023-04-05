import Image from "next/image";
import { Button } from "../Button";
import { ButtonContainer, Container, InfoWrapper, Orbit1, Orbit2, Orbit3, OrbitWrapper, Profile, ProfileContainer, Subtitle, Title } from "./styles";

import reactSvg from '../../assets/react.svg';
import typescriptSvg from '../../assets/typescript.svg';
import nextSvg from '../../assets/next.svg';

export function HeroSection() {
    return (
        <Container>
            <InfoWrapper>
                <Title>Welcome to my portfolio page!</Title>

                <Subtitle>My name is Gabriel Henrique Lopes Carvalho and I'm a Frontend developer</Subtitle>

                <ButtonContainer>
                    <Button size="md" text="Let's begin!" />
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
                        <Image src={reactSvg} alt="React logo" width={70} height={70} />
                    </Orbit2>
                    <Orbit3>
                        <Image src={reactSvg} alt="React logo" width={70} height={70} />
                    </Orbit3>
                </OrbitWrapper>
            </ProfileContainer>
        </Container>
    )
}