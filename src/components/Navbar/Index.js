import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,
NavBtn, NavBtnLink} from './NavBarElements'

const Navbar = ({toggle}) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/'>Nicolas Muntwyler</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="about">About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="education">Education</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="projects">Projects</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="contact">Contact</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to="signin">Download CV</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar
