import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,
	NavBtn, NavBtnLink} from './NavBarElements'

import Pdf from '../../documents/CV.pdf';

const Navbar = ({toggle}) => {
	const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
	}

	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/#home' scroll={el => scrollWithOffset(el)}>Nicolas Muntwyler</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="/#home" smooth={true} scroll={el => scrollWithOffset(el)}>About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/#education" smooth={true} scroll={el => scrollWithOffset(el)}>Education</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/#projects" smooth={true} scroll={el => scrollWithOffset(el)}>Projects</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/#contact" smooth={true} scroll={el => scrollWithOffset(el)}>Contact</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink href={Pdf} target="_blank">View CV</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar
