import React from 'react'
import { ProjectContainer, ProjectH1, CardsContainer, MLContainer,
    MlTitle, WebTitle, WebTitleFont, CardImg} from './ProjectElements'
import {MlCards, WebCards} from './data'
import Card from './Card'
import picSur from '../../images/thumnailSurface.png'
import picOF from '../../images/thumnailOF.png'
import picAP from '../../images/thumnailAP3.png'
import picSP from '../../images/thumnailSP.png'

import picC4 from '../../images/connectFour3.png'
import piclolAPI from '../../images/lolAPI.png'
import picHP from '../../images/homepage.png'


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
