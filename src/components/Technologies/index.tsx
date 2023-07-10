import { stacks } from '../../../stacks.js';

import { useInView } from 'react-intersection-observer';

import {
    AdditionalGrid,
    AdditionalNode,
    AdditionalTitle,
    Caption,
    Container,
    Stack,
    StackContainer,
    StackLevel,
    StackProgress,
    StackTexts,
    StackTitle,
    StackTrack,

    Title
} from "./styles";

export function Technologies() {

    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return (
        <Container id="technologies">
            <Title>Technologies</Title>

            <Caption>
                Proficient - Worked on 7 or more projects and I'm highly skilled in it. <br />
                Intermediate - Worked on 3 to 6 projects and have a good grasp. <br />
                Beginner - Workd on 1 to 2 projects and have a basic understanding.
            </Caption>


            <div ref={ref}>
                <StackContainer>
                    {stacks.map(stack => (
                        <Stack key={stack.name}>
                            <StackTexts>
                                <StackTitle>{stack.name}</StackTitle>
                                <StackLevel>{stack.level}</StackLevel>
                            </StackTexts>
                            <StackTrack>
                                <StackProgress progress={stack.bar} inView={inView} />
                            </StackTrack>
                        </Stack>
                    ))}
                </StackContainer>
            </div>

            <AdditionalTitle>Additional technologies and skills</AdditionalTitle>

            <AdditionalGrid>
                <AdditionalNode>· Git</AdditionalNode>
                <AdditionalNode>· C1 english</AdditionalNode>
                <AdditionalNode>· ESLint</AdditionalNode>
                <AdditionalNode>· Creativity</AdditionalNode>
                <AdditionalNode>· Quick learning</AdditionalNode>
                <AdditionalNode>· Teamwork</AdditionalNode>
                <AdditionalNode>· Critical thinking</AdditionalNode>
                <AdditionalNode>· Java</AdditionalNode>
            </AdditionalGrid>
        </Container>
    )
}