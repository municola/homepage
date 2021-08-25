import React from 'react'
import { ProjectContainer, ProjectH1, CardsContainer, MLContainer,
    MlTitle, WebTitle, WebTitleFont, CardImg} from './ProjectElements'
import {MlCards, WebCards} from './data'
import Card from './Card'
import picSur from '/home/nicolas/git/nicolasmuntwyler/src/images/thumnailSurface.png'
import picOF from '/home/nicolas/git/nicolasmuntwyler/src/images/thumnailOF.png'
import picAP from '/home/nicolas/git/nicolasmuntwyler/src/images/thumnailAP3.png'
import picSP from '/home/nicolas/git/nicolasmuntwyler/src/images/thumnailSP.png'

import picC4 from '/home/nicolas/git/nicolasmuntwyler/src/images/connectFour3.png'
import piclolAPI from '/home/nicolas/git/nicolasmuntwyler/src/images/lolAPI.png'
import picHP from '/home/nicolas/git/nicolasmuntwyler/src/images/homepage.png'


const pictures = [picSur, picOF, picAP, picSP, picC4, piclolAPI, picHP]


export default function ProjectSection() {
    return (
        <ProjectContainer id="projects">
            <ProjectH1>Projects</ProjectH1>
            <CardsContainer>
                <MLContainer>
                    <MlTitle>ML/AI Projects</MlTitle>
                    {MlCards.map((element) => {
                        return (
                            <Card data={element} picture={pictures[element.key-1]}/>
                        );
                    })}
                </MLContainer>
                <MLContainer>
						<WebTitle>
							<WebTitleFont>Web Development</WebTitleFont>
						</WebTitle>
						{WebCards.map((element) => {
							return (
							    <Card data={element} picture={pictures[element.key-1]}/>
							);
						})}
                </MLContainer>
            </CardsContainer>
        </ProjectContainer>
    )
}
