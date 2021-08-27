import React from 'react'
import {FooterContainer, FooterWrapper, FooterH1, ContactWrapper, 
    ContactInfos, ContactLine, Logo, Link} from './ContactsElements'
import {AiFillGithub, AiOutlineMail, AiFillLinkedin} from 'react-icons/ai'
import MailToButton from './MailToButton'
import { CallMadeOutlined } from '@material-ui/icons'


const Contacts = () => {
	const callMail = (e) => {
		window.location = "mailto:nicolas.muntwyler@gmail.com";
		e.preventDefault();
	}

	return (
			<FooterContainer id="contact">
					<FooterWrapper>
							<FooterH1>Contact</FooterH1>
							<ContactWrapper>
									<MailToButton label="Send me a message" mailto="mailto:nicolas.muntwyler@gmail.com" />
									<ContactInfos>
											<ContactLine>
													<Logo href="https://git.dolansoft.org/nicolas/"target="_blank" rel="noreferrer"><AiFillGithub /></Logo>
													<Link href="https://git.dolansoft.org/nicolas/" target="_blank" rel="noreferrer">Have a look at some code</Link>
											</ContactLine>
											<ContactLine>
													<Logo onClick={callMail} rel="noreferrer"><AiOutlineMail /></Logo>
													<Link onClick={callMail} >nicolas.muntwyler@gmail.com</Link>
											</ContactLine>
											<ContactLine>
											<Logo href="https://www.linkedin.com/in/nicolas-muntwyler-9598b8154/" target="_blank" rel="noreferrer"><AiFillLinkedin /></Logo>
													<Link 
														href="https://www.linkedin.com/in/nicolas-muntwyler-9598b8154/" 
														target="_blank" 
														rel="noreferrer">
															Connect with me on LinkedIn
													</Link>
											</ContactLine>
									</ContactInfos>
							</ContactWrapper>
					</FooterWrapper>
			</FooterContainer>
	)
}

export default Contacts
