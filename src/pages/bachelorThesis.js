import React, {useState} from 'react'
import {ProjecContainer, ProjectWrapper, Title, Date, 
    Course, Text, Link} from '../components/SingleProject/singleProjectElements'
import titleImg from '../images/shapes.png'
import Pdf from '../documents/BachelorThesis.pdf';

const BachelorThesis = () => {
    return (
        <ProjecContainer>
            <ProjectWrapper>
                <Title>Surface Reconstruction from 3D ponint Clouds</Title>
                <Course>Bachelor Thesis</Course>
                <Date>Sept 2020 - Mar 2021</Date>
                <br></br>
                <br></br>
                <Link href = {Pdf} target = "_blank">PDF</Link>
                <Link href="https://gitlab.inf.ethz.ch/OU-POLLEFEYS/projects/ddr/ddr" target = "_blank">Code</Link>
                <br></br>
                <br></br>
                <br></br>
                <img src={titleImg} alt="titleImg" />;
                <Text>This project was my Bachelor thesis ("ReconRLA: Point-based large-scale Surface Reconstruction from Point Clouds").</Text>
                <Text>Given an input point cloud we return a 3D mesh reconstruction</Text>
            </ProjectWrapper>
        </ProjecContainer>
    )
}

export default BachelorThesis
