import styled from 'styled-components'

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
    padding-top: 100px;
    margin-bottom: 100px;
    align-self: center;
`

export const ContactWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const ContactInfos = styled.div`
`

export const ContactLine = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    padding: 10px 0px;
`

export const Logo = styled.div`
    font-size: 3rem;
    display: flex;
    margin-right: 1rem;
`

export const Message = styled.form`
    display: flex;
    flex-direction: column;
    width: 40%;
`
