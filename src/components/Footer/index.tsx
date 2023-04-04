import { Container, Links, Text } from "./styles";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <Container>
            <Text>
                Whatsapp: <br /> +55 (83) 99657-1510
            </Text>
            <Text>
                Email: <br /> gabrielhenlc@gmail.com
            </Text>

            <Links>
                <Link href="https://github.com/Gabrielhlc" target="_blank">
                    <Image src={github} alt="github" width={72} height={72} />
                </Link>
                <Link href="https://www.linkedin.com/in/gabriel-carvalho-54790b21b/" target="_blank">
                    <Image src={linkedin} alt="linkedin" width={72} height={72} />
                </Link>
            </Links>
        </Container>
    )
}