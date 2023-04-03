import Image, { StaticImageData } from "next/image";
import { Button } from "../Button";
import { Container, Description, Divider, Title } from "./styles";

interface ProjectCardProps {
    project: string;
    source: StaticImageData;
    alt: string;
    description: string;
}

export function ProjectCard({ project, source, alt, description }: ProjectCardProps) {
    return (
        <Container>
            <Image src={source} alt={alt} width={500} height={266} style={{ borderRadius: "8px" }} />

            <Title>{project}</Title>

            <Divider />

            <Description>{description}</Description>

            <Button size="sm" text="Look it up" />

        </Container>
    )
}