import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SideBtnWrap,
SidebarLink, SidebarRoute } from './SidebarElements'

import Pdf from '../../documents/CV.pdf';

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
                    <SidebarLink to="/nicolasmuntwyler/#home" smooth={true} scroll={el => scrollWithOffset(el)}>
                        About
                    </SidebarLink>
                    <SidebarLink to="/nicolasmuntwyler/#education" smooth={true} scroll={el => scrollWithOffset(el)}>
                        Education
                    </SidebarLink>
                    <SidebarLink to="/nicolasmuntwyler/#projects" smooth={true} scroll={el => scrollWithOffset(el)}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="/nicolasmuntwyler/#contact" smooth={true} scroll={el => scrollWithOffset(el)}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href={Pdf} target="_blank">View CV</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
