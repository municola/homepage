import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SideBtnWrap,
SidebarLink, SidebarRoute } from './SidebarElements'


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        About
                    </SidebarLink>
                    <SidebarLink to="education" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Education
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Download CV</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
