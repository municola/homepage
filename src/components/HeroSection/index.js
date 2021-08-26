import React from 'react'
import { HeroContainer, HeroBg, HeroImg, HeroContent, HeroH1, HeroH2,
    Text } from './HeroElements'
import titleImg from '../../images/livingRoomNice01.png'


const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <HeroImg src={titleImg}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi, I'm Nicolas</HeroH1>
                <HeroH2>Machine Learning Student at ETH Zürich</HeroH2>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Text>Welcome to my Webpage. Here I try to give you a short overview of me and my projects.</Text>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
