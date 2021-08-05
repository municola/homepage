import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,
NavBtn, NavBtnLink} from './NavBarElements'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {
	const [scrollNav, setScrollNav] = useState(false)

	const changeNav = () => {
		if(window.scrollY >= 80) {
			setScrollNav(true)
		} else {
			setScrollNav(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, [])

	const toggleTop = () => {
		scroll.scrollToTop();
	}

	const scrollMore = () => {
		scroll.scrollMore(1000);
	}



	return (
		<>
			<Nav scrollNav={scrollNav} id="top">
				<NavbarContainer>
					<NavLogo to='/' onClick={toggleTop}>Nicolas Muntwyler</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="home" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="education" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Education</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to="cv">Download CV</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar
