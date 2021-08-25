import React from 'react'

import { HeroContainer, HeroBg, HeroImg, HeroContent, HeroH1, HeroH2 } from './HeroElements'

const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <HeroImg />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi, I'm Nicolas</HeroH1>
                <HeroH2>Machine Learning Student at ETH</HeroH2>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
