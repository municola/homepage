import React from 'react'
import {ProjecContainer, ProjectWrapper, Title, TitleImg, Date, 
    Course, Text, Link, Label1, Label3, TextTitle, 
    TextBox, TextSegment} from '../components/SingleProject/singleProjectElements'

const Others = () => {
    return (
        <ProjecContainer>
            <ProjectWrapper>
                <Title>Some of my smaller projects</Title>
                <Course>Machine Learning</Course>
                <Date>Feb 2020 - Today</Date>
                <br></br>
                <br></br>
                <TextSegment>
                    <TextTitle>-</TextTitle>
                    <TextBox>
                        <Text>Predicting Sepsis</Text>
                    </TextBox>
                </TextSegment>
                <TextSegment>
                    <TextTitle>-</TextTitle>
                    <TextBox>
                        <Text>Irregulaar ECG detection</Text>
                    </TextBox>
                </TextSegment>
                <TextSegment>
                    <TextTitle>-</TextTitle>
                    <TextBox>
                        <Text>Taste Similarities of food</Text>
                    </TextBox>
                </TextSegment>
            </ProjectWrapper>
        </ProjecContainer>
    )
}

export default Others
