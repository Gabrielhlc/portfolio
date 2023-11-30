import { Button } from "../Button";
import { ButtonContainer, Container, ContentTitle, ContentWorkload, Description, Subtitle, TimeContent, TimeDate, Timeline, TimelineCard, TimelineCards, TimelineYear, Title } from "./styles";

export function AboutMe() {
    return (
        <Container id="about">
            <Title>About me</Title>
            <Subtitle>A little background!</Subtitle>


            <Description>
                I am a 21-year-old guy who resides in Campina Grande, Paraíba, Brazil. I commenced studying programming at university in 2020 and have been studying web development since 2021. I found my passion in frontend and it's been a pleasure to discover this universe! Besides the art of coding, I love music, (e)sports and philosophy.
            </Description>

            <Timeline>
                <TimelineYear>2022</TimelineYear>
                <TimelineCards>
                    <TimelineCard>
                        <TimeDate>4 ABR</TimeDate>
                        <TimeContent>
                            <ContentTitle>The Web Developer Bootcamp 2.0 - Udemy</ContentTitle>
                            <ContentWorkload>64 hours</ContentWorkload>
                            <ButtonContainer>
                                <Button text="Certificate" size="xs" onClickURL="https://www.udemy.com/certificate/UC-c97779a7-f45f-4077-aa41-34320070504c/" />
                            </ButtonContainer>
                        </TimeContent>
                    </TimelineCard>
                    <TimelineCard>
                        <TimeDate>12 DEC</TimeDate>
                        <TimeContent>
                            <ContentTitle>Ignite ReactJS Path - Rocketseat </ContentTitle>
                            <ContentWorkload>100 hours</ContentWorkload>
                            <ButtonContainer>
                                <Button text="Certificate" size="xs" onClickURL="https://app.rocketseat.com.br/certificates/9bd36f4f-3754-4547-b0c5-b0c75360031d" />
                            </ButtonContainer>
                        </TimeContent>
                    </TimelineCard>
                </TimelineCards>
                <TimelineYear>2023</TimelineYear>
                <TimelineCards>
                    <TimelineCard>
                        <TimeDate>15 ABR</TimeDate>
                        <TimeContent>
                            <ContentTitle>Ignite React Native Path - Rocketseat</ContentTitle>
                            <ContentWorkload>50 hours</ContentWorkload>
                            <ButtonContainer>
                                <Button text="Certificate" size="xs" onClickURL="https://app.rocketseat.com.br/certificates/9bd36f4f-3754-4547-b0c5-b0c75360031d" />
                            </ButtonContainer>
                        </TimeContent>
                    </TimelineCard>
                    <TimelineCard>
                        <TimeDate>07 JUL</TimeDate>
                        <TimeContent>
                            <ContentTitle>Aprenda Flutter e Desenvolva Apps para Android e iOS 2022 - Udemy </ContentTitle>
                            <ContentWorkload>60 hours</ContentWorkload>
                            <ButtonContainer>
                                <Button text="Certificate" size="xs" onClickURL="https://www.udemy.com/certificate/UC-a57c6bc7-2996-4581-8ebc-6f378017811a/" />
                            </ButtonContainer>
                        </TimeContent>
                    </TimelineCard>
                    <TimelineCard>
                        <TimeDate>29 DEC</TimeDate>
                        <TimeContent>
                            <ContentTitle>Banco de Dados e Linguagem SQL com PostgreSQL</ContentTitle>
                            <ContentWorkload>16 hours</ContentWorkload>
                            <ButtonContainer>
                                <Button text="Certificate" size="xs" onClickURL="https://www.udemy.com/certificate/UC-009b950b-3c30-4acd-8921-21f2f20babe4/" />
                            </ButtonContainer>
                        </TimeContent>
                    </TimelineCard>
                </TimelineCards>
            </Timeline>
        </Container>
    )
}