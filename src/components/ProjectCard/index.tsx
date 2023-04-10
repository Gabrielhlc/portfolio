import Image, { StaticImageData } from "next/image";
import { Button } from "../Button";
import { Container, Description, Divider, Tag, Tags, Title } from "./styles";

interface ProjectCardProps {
    project: string;
    source: StaticImageData;
    alt: string;
    description: string;
    githubPage: string;
    tags: string[];
}

export function ProjectCard({ project, source, alt, description, githubPage, tags }: ProjectCardProps) {
    return (
        <Container>
            <Image src={source} alt={alt} width={500} height={266} style={{ borderRadius: "8px" }} />

            <Title>{project}</Title>

            <Tags>
                {tags.map(tag => (
                    <Tag>{tag}</Tag>
                ))}
            </Tags>

            <Divider />

            <Description>{description}</Description>

            <Button size="sm" text="Look it up!" onClickURL={githubPage} />

        </Container>
    )
}