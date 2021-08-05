import React from 'react'
import { EducationContainer, EducationWrapper, EducationH1, TimelineWrapper,
workIconStyles, schoolIconStyles} from './EducationElements'
import {FaGraduationCap} from 'react-icons/fa'
import {timelineElements} from './data'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

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
                        return (
                          <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            icon={<FaGraduationCap/>}
                            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                          >
                            <h3 className="vertical-timeline-element-title">{element.title}</h3>
                            <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                            <p className="description">{element.description}</p>
                            {hasButton && <p >{element.buttonText}</p>}
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
