import { ProjectCard } from "../ProjectCard";
import { Container, ProjectsWrapper, Title } from "./styles";

import igniteShop from "../../assets/ignite-shop.png";

export function Projects() {
    return (
        <Container>
            <Title>Projects</Title>
            <ProjectsWrapper>
                <ProjectCard source={igniteShop} alt="ignite shop" project="Ignite Shop" description="Ignite Shop is a web clothing ecommerce, developed in React and focused on client-side performance, featuring Nextjs" />
                <ProjectCard source={igniteShop} alt="ignite shop" project="Ignite Shop" description="Ignite Shop is a web clothing ecommerce, developed in React and focused on client-side performance, featuring Nextjs" />
                <ProjectCard source={igniteShop} alt="ignite shop" project="Ignite Shop" description="Ignite Shop is a web clothing ecommerce, developed in React and focused on client-side performance, featuring Nextjs" />
                <ProjectCard source={igniteShop} alt="ignite shop" project="Ignite Shop" description="Ignite Shop is a web clothing ecommerce, developed in React and focused on client-side performance, featuring Nextjs" />
            </ProjectsWrapper>
        </Container>
    )
}