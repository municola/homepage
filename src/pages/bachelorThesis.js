import React from 'react'
import {ProjecContainer, ProjectWrapper, Title, TitleImg, Date, 
    Course, Text, Link, Label1, Label2, TextTitle, 
    TextBox, TextSegment} from '../components/SingleProject/singleProjectElements'
import titleImg from '../images/shapes.png'
import Pdf from '../documents/BachelorThesis.pdf';

const BachelorThesis = () => {
    return (
        <ProjecContainer>
            <ProjectWrapper>
                <Title>Surface Reconstruction from 3D Point Clouds</Title>
                <Course>Bachelor Thesis</Course>
                <Date>Sept 2020 - Mar 2021</Date>
                <br></br>
                <Label1>Deep Learning</Label1><Label2>Computer Graphics</Label2>
                <br></br>
                <br></br>
                <br></br>
                <TextSegment>
                    <TextTitle>Task:</TextTitle>
                    <TextBox>
                        <Text>Given a 3D input point cloud, return a 3D mesh reconstruction.</Text>
                        <Text>For example we get (up to multiple millions) of points that lie on the surface of a chair. By applying our reconstruction
                            Pipeline, we can then return the corresponding 3D mesh representation, hence a 3D model of the chair.
                        </Text>
                        <br></br>
                        <TitleImg src={titleImg} alt="titleImg" />
                    </TextBox>
                </TextSegment>
                <TextSegment>
                    <TextTitle>Architecture:</TextTitle>
                    <TextBox>
                        <Text>VAE + GNN</Text>
                        <Text>The whole Architecture is a variational autoencoder. In the encoding step we use an attention-based Graph neural network 
                            to assign each point a feature vector, which we then use in the implicit decoder to predict a signed distance function value.
                            Based on these predictions a marching cubes algorithm then returns the 3D mesh.
                        </Text>
                    </TextBox>
                </TextSegment>
                <br></br>
                <br></br>
                <TextSegment>
                    <TextTitle>Performance: </TextTitle>
                    <TextBox>
                        <Text>We peform on par with DeepSDF (MIT, Facebook Reality Labs) and outperform OccNet (University of Tübingen, Google Brain)</Text>
                    </TextBox>
                </TextSegment>
                <br></br>
                <br></br>
                <TextSegment>
                    <TextTitle>Material: </TextTitle>
                    <TextBox>
                        <Link href = {Pdf} target = "_blank">PDF</Link>
                        <Link href="https://gitlab.inf.ethz.ch/OU-POLLEFEYS/projects/ddr/ddr" target = "_blank">Code</Link>
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
                        <Text>Pytorch, Pytorch-lightning, Hydra</Text>
                    </TextBox>
                </TextSegment>
                <br></br>
            </ProjectWrapper>
        </ProjecContainer>
    )
}

export default BachelorThesis
