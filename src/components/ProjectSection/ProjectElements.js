import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const ProjectContainer = styled.div`
    width: 100%;
    min-height: 810px;
    background: #232a34;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    position: relative;
    z-index: 1;
    flex-direction: column;
`

export const ProjectH1 = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 3rem;
    font-weight: 100;
    margin-top: 100px;
    margin-bottom: 100px;
`
export const CardsContainer = styled.div`
    max-width: 1100px;
    display: flex;
    flex-direction: column;
`

export const MLContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const MlTitle = styled.h1`
    color: #fff;
    font-weight: 100;
    padding-bottom: 2rem;
`

export const MlCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const CardItem = styled.div`
    background: yellow;
    height: 230px;
    width: 230px;
`
export const CardItemLink = styled(LinkR)`

`
export const CardImg = styled.img`
    
`


export const rootStyle = {
    maxWidth: 345,
}

export const mediaStyle = {
    root: {
        maxWidth: 345,
      },
    media: {
        height: 100,
    },
}

