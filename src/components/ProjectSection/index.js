import React from 'react'
import { ProjectContainer, ProjectH1, CardsContainer, MLContainer,
    MlTitle, WebTitle, WebTitleFont, CardImg} from './ProjectElements'
import {MlCards, WebCards} from './data'
import Card from './Card'


export default function ProjectSection() {
    return (
        <ProjectContainer id="projects">
            <ProjectH1>Projects</ProjectH1>
            <CardsContainer>
                <MLContainer>
                    <MlTitle>ML/AI Projects</MlTitle>
											{MlCards.map((element) => {
													return (
														<Card data={element}/>
													);
											})}
                </MLContainer>
                <MLContainer>
									<WebTitle>
										<WebTitleFont>Web Development</WebTitleFont>
									</WebTitle>
											{WebCards.map((element) => {
														return (
															<Card data={element}/>
														);
												})}
                </MLContainer>
            </CardsContainer>
        </ProjectContainer>
    )
}
