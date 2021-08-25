import React from 'react'
import {ProjecContainer, ProjectWrapper, Title, TitleImg, Date, 
    Course, Text, Link, Label1, Label3, TextTitle, 
    TextBox, TextSegment} from '../components/SingleProject/singleProjectElements'
import titleImg from '../images/OF2.png'
import Pdf from '../documents/MachinePerceptionReport.pdf';


const OpticalFlow = () => {
    return (
        <ProjecContainer>
            <ProjectWrapper>
                <Title>Optical Flow Estimation</Title>
                <Course>Machine Perception</Course>
                <Date>Mar 2021 - June 2021</Date>
                <br></br>
                <Label1>Deep Learning</Label1><Label3>Computer Vision</Label3>
                <br></br>
                <br></br>
                <br></br>
                <TextSegment>
                    <TextTitle>Task:</TextTitle>
                    <TextBox>
                        <Text>Predict the optical flow between two consecutive Images.</Text>
                        <Text>For each pixel we estimate its movement between the left and the right RGB image. 
                            The flow prediction is visualized with the middle image.</Text>
                        <br></br>
                        <TitleImg src={titleImg} alt="titleImg" style={{height: "200px"}}/>
                    </TextBox>
                </TextSegment>
                <br></br>
                <TextSegment>
                    <TextTitle>Architecture:</TextTitle>
                    <TextBox>
                        <Text>PWC-net + Iterative Refinement + Cycle consistency</Text>
                        <Text>We base our architecture on the pretrained PWC-net. By iteratively apply the PWC-net on the residual flow we increase
                            the accuracy in each iteration. Additionally we perform an inverse flow prediction to introduce a cycle consistency loss
                            which further improves the quality of our flow estimatinon.
                        </Text>
                    </TextBox>
                </TextSegment>
                <br></br>
                <br></br>
                <TextSegment>
                    <TextTitle>Performance: </TextTitle>
                    <TextBox>
                        <Text>We achieve a 67% End Point Error reduction regarding the normal PWC-Net (NVIDIA)</Text>
                    </TextBox>
                </TextSegment>
                <br></br>
                <br></br>
                <TextSegment>
                    <TextTitle>Material: </TextTitle>
                    <TextBox>
                        <Link href = {Pdf} target = "_blank">PDF</Link>
                        <Link href="https://gitlab.inf.ethz.ch/COURSE-MP2021/GradeDescent" target = "_blank">Code</Link>
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
                        <Text>Pytorch</Text>
                    </TextBox>
                </TextSegment>
            </ProjectWrapper>
        </ProjecContainer>
    )
}

export default OpticalFlow
