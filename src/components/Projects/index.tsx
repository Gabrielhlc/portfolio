import Link from "next/link";
import Image from "next/image";

import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

import { ProjectCard } from "../ProjectCard";

import igniteShop from "../../assets/ignite-shop.png";
import dailyDiet from "../../assets/dailyDiet.png";
import nlwesports from "../../assets/nlwesports.png";
import ignitegym from "../../assets/ignitegym2.png";
import cishop from "../../assets/cishop.png";
import coffeeDelivery from "../../assets/coffee-delivery.jpeg.jpeg";
import github from "../../assets/github.svg";

import { Container, ProjectsWrapper, Subtitle, Title } from "./styles";
import useCurrentBreakpoint from "@/hooks/useCurrentBreakpoint";
import { useEffect, useState } from "react";


export function Projects() {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const [imageSize, setImageSize] = useState<number>();

    const breakpoint = useCurrentBreakpoint();


    const styles = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-20%)',
    });

    useEffect(() => {
        if (breakpoint === "extraLarge") {
            setImageSize(50);
        } else {
            setImageSize(35);
        }
    }, [breakpoint]);

    return (
        <Container id="projects">
            <Title>
                Projects <Link href="https://github.com/Gabrielhlc" target="_blank">
                    <Image src={github} alt="github" height={imageSize} />
                </Link>
            </Title>

            <Subtitle>Check out some of my cherished projects!</Subtitle>

            <animated.div style={styles} ref={ref}>
                <ProjectsWrapper>
                    <ProjectCard
                        source={igniteShop}
                        alt="Ignite Shop"
                        project="Ignite Shop"
                        description="Clothing ecommerce, developed in React and focused on client-side performance, featuring Next.js."
                        githubPage="https://github.com/Gabrielhlc/ignite-shop"
                        tags={['Web', 'React', 'Next.js']}
                    />
                    <ProjectCard
                        source={dailyDiet}
                        alt="Daily Diet"
                        project="Daily Diet"
                        description="Diet tracking application, developed in React Native."
                        githubPage="https://github.com/Gabrielhlc/DailyDiet"
                        tags={['Mobile', 'React Native']}
                    />
                    <ProjectCard
                        source={nlwesports}
                        alt="NLW eSports"
                        project="NLW eSports"
                        description="eSports social app. The web is developed in React, the mobile is in React Native and the backend is in Node.js."
                        githubPage="https://github.com/Gabrielhlc/NLW-eSports"
                        tags={['Fullstack', 'React', 'React Native', 'Node']}
                    />
                    <ProjectCard
                        source={ignitegym}
                        alt="Ignite Gym"
                        project="Ignite Gym"
                        description="A gym auxiliar application, developed in React Native."
                        githubPage="https://github.com/Gabrielhlc/ignite-gym"
                        tags={['Mobile', 'React Native']}
                    />
                    <ProjectCard
                        source={cishop}
                        alt="cishop"
                        project="Cishop"
                        description="ecommerce application, developed in Flutter."
                        githubPage="https://github.com/Gabrielhlc/cishop"
                        tags={['Mobile', 'Flutter']}
                    />
                    <ProjectCard
                        source={coffeeDelivery}
                        alt="Coffee Delivery"
                        project="Coffee Delivery"
                        description="Coffee delivery, developed in React."
                        githubPage="https://github.com/Gabrielhlc/coffee-delivery"
                        tags={['Web', 'React']}
                    />
                </ProjectsWrapper>
            </animated.div>
        </Container>
    )
}