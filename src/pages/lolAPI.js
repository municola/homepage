import React from 'react'
import {ProjecContainer, ProjectWrapper, Title, TitleImg, Date, 
    Course, Text, Link, Link2, Label3, TextTitle, 
    TextBox, TextSegment} from '../components/SingleProject/singleProjectElements'
import titleImg from '../images/lolAPI.png'

const LolAPI = () => {
    return (
        <ProjecContainer>
            <ProjectWrapper>
                <Title>Friendlist Online Checker for League of Legends</Title>
                <Course>React Application</Course>
                <Date>Feb 2017 - Mar 2017</Date>
                <br></br>
                <br></br>
                <TextSegment>
                    <TextTitle>Motivation:</TextTitle>
                    <TextBox>
                        <Text>For coding I personally like to use Linux. However the game League of Legends is running on Windows.
                                Therefore I had no option to check if my friends are currentely online. So if I wanted to play with them
                                I had to guess if they are online, and then swap OS and start League of Legends. In some situations I was 
                                wrong and they were offline or have just started a game, which takes at least 20min, which I then had to wait.
                                In order to solve my little problem I wrote this website on which I could query for my friends and it would 
                                tell me how many minutes they are already in a game, online or offline.
                            </Text>
                    </TextBox>
                </TextSegment>
                <br></br>
                <TextSegment>
                    <TextTitle>Description:</TextTitle>
                    <TextBox>
                        <Text>React Application that checks if players are currentely online/available in League of Legends. By searching in the
                            League of Legends Player database we can add or delete players. For each player we can check its online/offline status.
                            If the player is already in a game, it additionaly displays additional which other players he is currently playing.
                        </Text>
                        <br></br>
                        <TitleImg src={titleImg} alt="titleImg" style={{height: "300px"}}/>
                    </TextBox>
                </TextSegment>
                <br></br>
                <TextSegment>
                    <TextTitle>Architecture:</TextTitle>
                    <TextBox>
                        <Text>Reactjs + redux + API</Text>
                    </TextBox>
                </TextSegment>
                <br></br>
                <br></br>
                <TextSegment>
                    <TextTitle>Material: </TextTitle>
                    <TextBox>
                        <Link href="https://git.dolansoft.org/nicolas/lolAPI" target = "_blank">Code Website</Link>
                    </TextBox>
                </TextSegment>
                <br></br>
            </ProjectWrapper>
        </ProjecContainer>
    )
}

export default LolAPI
