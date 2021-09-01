import React from 'react'
import { EducationContainer, EducationWrapper, EducationH1, TimelineWrapper,
workIconStyles, schoolIconStyles, Link} from './EducationElements'
import {FaGraduationCap} from 'react-icons/fa'
import {timelineElements} from './data'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import Pdf from '../../documents/Bachelor.pdf';

const EducationSection = () => {
    return (
        <>
          <EducationContainer id='education'>
              <EducationWrapper>
                  <EducationH1>
                    Education
                  </EducationH1>
                  <TimelineWrapper>
                    <VerticalTimeline>
                      {timelineElements.map((element) => {
                        let isWorkIcon = element.icon === "work";
                        let hasButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== "";
                        let hasDescription2 = element.description2 !== undefined && element.description2 !== null && element.description2 !== "";
                        return (
                          <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            icon={<FaGraduationCap/>}
                            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                          >
                            <h3 className="vertical-timeline-element-title">{element.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{element.location}</h4>
                            <p style={{margin: '10px 0px 0px 0px'}} className="description">{element.description}</p>
                            {hasDescription2 && <p style={{margin: '0px 0px 0px 0px'}}>{element.description2}</p>}
                            <br></br>
                            {hasButton && <Link href={Pdf} target = "_blank">{element.buttonText}</Link>}
                            <br></br>
                          </VerticalTimelineElement>
                        );
                      })}
                    </VerticalTimeline>
                  </TimelineWrapper>
              </EducationWrapper>
          </EducationContainer>
        </>
    )
}

export default EducationSection

