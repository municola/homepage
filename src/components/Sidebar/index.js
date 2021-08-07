import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SideBtnWrap,
SidebarLink, SidebarRoute } from './SidebarElements'


const Sidebar = ({isOpen, toggle}) => {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/#home" smooth={true} scroll={el => scrollWithOffset(el)}>
                        About
                    </SidebarLink>
                    <SidebarLink to="/#education" smooth={true} scroll={el => scrollWithOffset(el)}>
                        Education
                    </SidebarLink>
                    <SidebarLink to="/#projects" smooth={true} scroll={el => scrollWithOffset(el)}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="/#contact" smooth={true} scroll={el => scrollWithOffset(el)}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/cv">Download CV</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
