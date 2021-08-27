import React from 'react'
import {ProjecContainer, ProjectWrapper, Title, TitleImg, Date, 
    Course, Text, Link, Label1, Label3, TextTitle, 
    TextBox, TextSegment} from '../components/SingleProject/singleProjectElements'
import titleImg from '../images/opinionText.png'
import Pdf from '../documents/NLP.pdf';


const AuthorPrediction = () => {
    return (
        <ProjecContainer>
            <ProjectWrapper>
                <Title>Authorship Attribution and Influence Detection</Title>
                <Course>Natural Language Processing</Course>
                <Date>Feb 2020 - June 2020</Date>
                <br></br>
                <Label3>Natural Language Processing</Label3>
                <br></br>
                <br></br>
                <br></br>
                <TextSegment>
                    <TextTitle>Task:</TextTitle>
                    <TextBox>
                        <Text>1. Predict the author of a judical opinion text</Text>
                        <Text>2. Detect influence of different judges on the opinions of other judges.</Text>
                        <br></br>
                        <TitleImg src={titleImg} alt="titleImg" style={{maxHeight: "280px"}}/>
                    </TextBox>
                </TextSegment>
                <br></br>
                <TextSegment>
                    <TextTitle>Architecture:</TextTitle>
                    <TextBox>
                        <Text>SVM + BoW</Text>
                        <Text>After cleaning each opinion text we encode them in a Bag of Words vector of its mono-, bi- and tri-grams. We then apply
                            a probabilistic SVM to get a probability distribution over the different judges on the authorship of this text.
                        </Text>
                    </TextBox>
                </TextSegment>
                <br></br>
                <br></br>
                <TextSegment>
                    <TextTitle>Performance: </TextTitle>
                    <TextBox>
                        <Text>On the Authorship Attribution task we achieve an accuracy up to 95%</Text>
                    </TextBox>
                </TextSegment>
                <br></br>
                <br></br>
                <TextSegment>
                    <TextTitle>Material: </TextTitle>
                    <TextBox>
                        <Link href = {Pdf} target = "_blank">PDF</Link>
                        <Link href="https://gitlab.inf.ethz.ch/nlp" target = "_blank">Todo: Code</Link>
                    </TextBox>
                </TextSegment>
                <br></br>
                <TextSegment>
                    <TextTitle>Language:</TextTitle>
                    <TextBox>
                        <Text>Python</Text>
                    </TextBox>
                </TextSegment>
                <br></br>
                <TextSegment>
                    <TextTitle>Frameworks:</TextTitle>
                    <TextBox>
                        <Text>Scikit-learn</Text>
                    </TextBox>
                </TextSegment>
                <br></br>
            </ProjectWrapper>
        </ProjecContainer>
    )
}

export default AuthorPrediction
