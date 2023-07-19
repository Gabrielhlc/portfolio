import { Container, Links, Text } from "./styles";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import Image from "next/image";
import Link from "next/link";
import useCurrentBreakpoint from "@/hooks/useCurrentBreakpoint";
import { useEffect, useState } from "react";

export function Footer() {
    const [imageSize, setImageSize] = useState<number>();

    const breakpoint = useCurrentBreakpoint();

    useEffect(() => {
        if (breakpoint === "extraLarge") {
            setImageSize(66);
        } else {
            setImageSize(36);
        }
    }, [breakpoint]);

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
                    <Image src={github} alt="github" width={imageSize} height={imageSize} />
                </Link>
                <Link href="https://www.linkedin.com/in/gabriel-carvalho-54790b21b/" target="_blank">
                    <Image src={linkedin} alt="linkedin" width={imageSize} height={imageSize} />
                </Link>
            </Links>
        </Container>
    )
}