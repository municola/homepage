import styled from 'styled-components'

export const ProjecContainer = styled.div`
    background: #232a34;
    min-height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
`

export const ProjectWrapper = styled.div`
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    margin-top: 100px;
`

export const Title = styled.h1`
    color: #fff;
    font-weight: 100;
    padding-bottom: 5px;
`

export const Date = styled.p`
    color: grey;
`

export const Course = styled.p`
    color: grey;
`

export const Text = styled.p`
    color: #fff;
    font-weight: 100;
    font-size: 1.2rem;
`
export const Link = styled.a`
    margin-right: 10px;
    font-weight: 100;
    text-decoration: none;
    color: white;
    padding: 5px;
    border: 1px solid white;
    border-radius: 5px;

    &:hover {
        color: black;
        background: white;
        font-weight: 300;
    }
`