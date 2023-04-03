import Image from "next/image";

import logo from "../../assets/logo.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

import { Container, Links, Logo, NavItems, Text } from "./styles";

export function Nav() {
    return (
        <Container>
            <Logo>
                <Image src={logo} alt="logo" width={47} height={47} />
                <Text>Gabriel Carvalho</Text>
            </Logo>

            <NavItems>
                <Text>Projects</Text>
                <Text>Technologies</Text>
                <Text>About me</Text>
            </NavItems>

            <Links>
                <Image src={github} alt="github" />
                <Image src={linkedin} alt="linkedin" />
            </Links>
        </Container>
    )
}