import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import useCurrentBreakpoint from "@/hooks/useCurrentBreakpoint";

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

    const [imageWidth, setImageWidth] = useState<number>();
    const [imageHeight, setImageHeight] = useState<number>();

    const breakpoint = useCurrentBreakpoint();

    useEffect(() => {
        if (breakpoint === "extraLarge") {
            setImageWidth(500);
            setImageHeight(266);
        } else {
            setImageWidth(400);
            setImageHeight(213);
        }
    }, [breakpoint]);

    return (
        <Container>
            <Image src={source} alt={alt} width={imageWidth} height={imageHeight} style={{ borderRadius: "8px" }} />

            <Title>{project}</Title>

            <Tags>
                {tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </Tags>

            <Divider />

            <Description>{description}</Description>

            <Button size="sm" text="Look it up!" onClickURL={githubPage} />

        </Container>
    )
}