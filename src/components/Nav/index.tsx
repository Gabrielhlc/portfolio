import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll';

import logo from "../../assets/logo.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

import { Container, Links, Logo, LogoText, NavItems, NavLink } from "./styles";

export function Nav() {
    return (
        <Container>
            <Logo>
                <Image src={logo} alt="logo" width={47} height={47} />
                <LogoText>Gabriel Carvalho</LogoText>
            </Logo>

            <NavItems>
                <ScrollLink to="projects" smooth={true}>
                    <NavLink>Projects</NavLink>
                </ScrollLink>

                <ScrollLink to="technologies" smooth={true}>
                    <NavLink>Technologies</NavLink>
                </ScrollLink>

                <ScrollLink to="about" smooth={true}>
                    <NavLink>About me</NavLink>
                </ScrollLink>
            </NavItems>

            <Links>
                <Link href="https://github.com/Gabrielhlc" target="_blank">
                    <Image src={github} alt="github" />
                </Link>
                <Link href="https://www.linkedin.com/in/gabriel-carvalho-54790b21b/" target="_blank">
                    <Image src={linkedin} alt="linkedin" />
                </Link>
            </Links>
        </Container>
    )
}