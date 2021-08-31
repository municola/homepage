import React from 'react'
import {ProjecContainer, ProjectWrapper, Title, TitleImg, Date, 
    Course, Text, Link, Link2, Label3, TextTitle, 
    TextBox, TextSegment} from '../components/SingleProject/singleProjectElements'
import titleImg from '../images/c4im1.png'
import titleImg2 from '../images/c4im2.png'

const ConnectFour = () => {
    return (
        <ProjecContainer>
            <ProjectWrapper>
                <Title>Connect four</Title>
                <Course>React Application</Course>
                <Date>Feb 2017 - Sep 2017</Date>
                <br></br>
                <br></br>
                <TextSegment>
                    <TextTitle>Website:</TextTitle>
                    <TextBox>
                    <Link2 href="http://connect4.nimulia.com/" target = "_blank">http://connect4.nimulia.com/</Link2>
                    </TextBox>
                </TextSegment>
                <br></br>
                <br></br>
                <TextSegment>
                    <TextTitle>Description:</TextTitle>
                    <TextBox>
                        <Text>Implementation of an online multiplayer Connect Four game. The orignal connect four game is solved. Meaning that we
                            know the prefect strategy. In fact the player with the first move always wins. In order to give the game a new twist we
                            introduce a new Rule:
                        </Text>
                        <Text>"Instead of placing your stone, you can choose to delete a stone of the enemy as your move. You are
                            only allowed to delete if the resulting game state has never seen before (This prevents that you just delete the stone the
                            enemy just set in his last turn)"</Text>
                        <Text>With this new rule many new strategies emerge and make the game intersting again.</Text>
                        <br></br>
                        <TitleImg src={titleImg} alt="titleImg" style={{height: "300px"}}/>
                        <TitleImg src={titleImg2} alt="titleImg" style={{height: "300px", marginLeft: "50px"}}/>
                    </TextBox>
                </TextSegment>
                <br></br>
                <TextSegment>
                    <TextTitle>Architecture:</TextTitle>
                    <TextBox>
                        <Text>Reactjs + redux + socket.io</Text>
                        <Text>We use React to render our game. In order to track the past game states we use redux and for multiplayer
                            interacations we use socket.io
                        </Text>
                    </TextBox>
                </TextSegment>
                <br></br>
                <br></br>
                <TextSegment>
                    <TextTitle>Material: </TextTitle>
                    <TextBox>
                        <Link href="https://github.com/municola/connect4" target = "_blank">Code Website</Link>
                        <Link href="https://github.com/municola/connect4server" target = "_blank">Code Server</Link>
                    </TextBox>
                </TextSegment>
                <br></br>
            </ProjectWrapper>
        </ProjecContainer>
    )
}

export default ConnectFour
