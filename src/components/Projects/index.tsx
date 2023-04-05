import { ProjectCard } from "../ProjectCard";
import { Container, ProjectsWrapper, Title } from "./styles";

import igniteShop from "../../assets/ignite-shop.png";
import dailyDiet from "../../assets/dailyDiet.png";
import nlwesports from "../../assets/nlwesports.png";
import ignitegym from "../../assets/ignitegym2.png";

export function Projects() {
    return (
        <Container id="projects">
            <Title>Projects</Title>
            <ProjectsWrapper>
                <ProjectCard
                    source={igniteShop}
                    alt="Ignite Shop"
                    project="Ignite Shop"
                    description="A web clothing ecommerce, developed in React and focused on client-side performance, featuring Next.js."
                    githubPage="https://github.com/Gabrielhlc/ignite-shop"
                />
                <ProjectCard
                    source={dailyDiet}
                    alt="Daily Diet"
                    project="Daily Diet"
                    description="A mobile diet tracking application, developed in React Native."
                    githubPage="https://github.com/Gabrielhlc/DailyDiet"
                />
                <ProjectCard
                    source={nlwesports}
                    alt="NLW eSports"
                    project="NLW eSports"
                    description="A fullstack eSports social app. The web is developed in React, the mobile is in React Native and the backend is in Node.js."
                    githubPage="https://github.com/Gabrielhlc/NLW-eSports"
                />
                <ProjectCard
                    source={ignitegym}
                    alt="Ignite Gym"
                    project="Ignite Gym"
                    description="A mobile gym auxiliar application, developed in React Native."
                    githubPage="https://github.com/Gabrielhlc/ignite-gym"
                />
            </ProjectsWrapper>
        </Container>
    )
}