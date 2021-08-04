import React from 'react'
import {FooterContainer, FooterWrapper, FooterH1, ContactWrapper, 
    ContactInfos, Message, ContactLine, Logo} from './FooterElements'
import {AiFillGithub, AiOutlineMail, AiFillLinkedin} from 'react-icons/ai'
import './styling.scss'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterH1>Contact</FooterH1>
                <ContactWrapper>
                    <ContactInfos>
                        <ContactLine>
                            <Logo><AiFillGithub /></Logo>
                            <p>Have a look at some code</p>
                        </ContactLine>
                        <ContactLine>
                            <Logo><AiFillLinkedin /></Logo>
                            <p>Connecte with me on LinkedIn</p>
                        </ContactLine>
                        <ContactLine>
                            <Logo><AiOutlineMail /></Logo>
                            <p>nicolas.muntwyler@gmail.com</p>
                        </ContactLine>
                    </ContactInfos>
                    <Message>
                        <input type="text" placeholder="Email" className="EmailField"/>
                        <textarea placeholder="Message" className="MessageField"></textarea>
                        <button type="submit" className="SendButton">Send</button>
                    </Message>
                </ContactWrapper>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
