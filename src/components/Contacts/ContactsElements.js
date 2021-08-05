import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const FooterContainer = styled.div`
    height: calc(100vh - 80px);
    background: #4b6cc1;
    display: flex;
    justify-content: center;


`
export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 24px;
    padding-right: 24px;
    width: 1100px;
    max-width: 1100px;
`

export const FooterH1 = styled.h1`
    color: #fff;
    font-size: 3rem;
    font-weight: 100;
    padding-top: 10%;
    margin-bottom: 15%;
    align-self: center;
`

export const ContactWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

export const ContactInfos = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    @media screen and (max-width: 1120px) {
        flex-direction: column;
    }
`

export const ContactLine = styled.div`
    align-self: center;
    display: flex;
    align-items: center;
    font-size: 20px;
    padding: 10px 0px;
`

export const Logo = styled.a`
    font-size: 3rem;
    display: flex;
    margin-right: 1rem;
    color: black;

    &:hover {
        cursor: pointer;
    }
`

export const MailToButtonWrapper = styled(LinkR)`
    font-size: 1.5rem;
    border-radius: 2px;
    background: #01bf71;
    white-space: nowrap;
    padding: 17px 22px;
    color: #010606;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-bottom: 15%;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const Link = styled.a`
    color: white;
    font-weight: 100;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`