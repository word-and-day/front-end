import styled from 'styled-components'

export const GroupBox = styled.div`
    justify-content: flex-start;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    color: #ffffff;
    background-color: #001102;
    overflow: hidden;
`
export const FindBox = styled(GroupBox)`
    justify-content: center;
    flex-direction: column;
`
export const Subject = styled.p`
    font-size: 5.2vmin;
    margin: 16.5119vmin 0;
    cursor: pointer;
`
export const Line = styled.div`
    display: flex;
    margin: -4.128vmin 0;
    font-size: 3vmin;
    & p {
        margin: 0;
        cursor: default;
    }
    & input {
        margin: 0 0 0 2.06398vmin;
        width: 21.466vmin;
        padding: 0 1.031992vmin;
        border: none;
        outline: none;
        font-family: 마루 부리OTF Beta, 나눔스퀘어;
        font-size: 3vmin;
    }
`
export const GroupChoice = styled.div`
    margin: 12.3839vmin;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    & div {
        width: 37.359vmin;
        height: 20.64vmin;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & p {
        color: #000000;
        font-size: 5vmin;
    }

    & img {
        position: absolute;
    }
`
export const GroupName = styled.p`
    font-size: 6.19195vmin;
    width: 10vmin;
    margin: 0 8vmin;
`
export const PostCollect = styled.div`
    width: auto;
    height: 100%;
    display: flex;
`
export const Post = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36vmin;
    margin: 12.3839vmin 6vmin 12.3839vmin 0;
    & div {
        width: 37.359vmin;
        height: 20.64vmin;
        background-color: #ffffff;
        display: flex;
    }

    & p {
        color: #000000;
        font-size: 3.09598vmin;
        margin: 2.06398vmin;
    }

    & img {
        position: absolute;
        color: transparent;
    }
`