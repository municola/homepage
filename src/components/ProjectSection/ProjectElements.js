import styled from 'styled-components'
import {HashLink as LinkH} from 'react-router-hash-link';
import {Link as LinkR} from 'react-router-dom'

export const ProjectContainer = styled.div`
    width: 100%;
    background: #1f2833;
    display: flex;
    //justify-content: center;
    align-items: center;
    padding: 0 24px;
    position: relative;
    z-index: 1;
    flex-direction: column;
    min-height: calc(100vh - 80px);
`

export const ProjectH1 = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 3rem;
    font-weight: 100;
    margin-top: 100px;
    margin-bottom: 100px;
`
export const SimpleText = styled.p`
    color: white;
    font-weight: 100;
    font-size: 1.2rem;
    margin-top: 50px;
`

export const Link = styled.a`
    color: white;
    font-weight: 100;
    text-decoration: none;
    cursor: pointer;
    margin-left: 5px;
    text-decoration: underline;

    &:hover {
        color: #66fcf1
    }
`

export const CardsContainer = styled.div`
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
`

export const MLContainer = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 230px 230px 230px 230px;
    margin-bottom: 50px;

    @media screen and (max-width: 1205px) {
        grid-template-columns: 230px 230px;
        justify-content: center;
    }

    @media screen and (max-width: 590px) {
        grid-template-columns: 230px;
        justify-content: center;
        justify-items: center;
    }
`

export const MlTitle = styled.h1`
    grid-column-start: 1;
    grid-column-end: -1;
    display: flex;
    color: #fff;
    font-weight: 100;
    padding-bottom: 2rem;
`
export const WebTitle = styled.div`
    grid-column-start: 1;
    grid-column-end: -1;
    color: #fff;
    padding-bottom: 2rem;
    display: flex;

`

export const WebTitleFont = styled.h1`
    font-weight: 100;
    margin-top: 50px;

    @media screen and (max-width: 590px) {
        text-align: center;
    }
`

export const CardItem = styled(LinkH)`
    //background: #66fcf1;
    background: white;
    border-radius: 11px;
    height: 230px;
    width: 230px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &:hover {
        transform: scale(1.05);
        transition: all 0.3s ease;
    }
`

export const CardImageSegment = styled.div`
    border-radius: 10px 10px 0px 0px;
    //filter: blur(1.5px);
    display: flex;
    justify-content: center;
    height: 60%;
    width: 100%;
    background: white;
`

export const CardImg = styled.img`
    border-radius: 10px 10px 0px 0px;
    height: 100%;
    width: 100%;
`

export const CardTitleSegment = styled.div`
    display: flex;
    align-items: center;
    height: 40%;
`

export const CardTitle = styled.p`
    font-weight: 300;
    font-size: 1.2rem;
    color: black;
`