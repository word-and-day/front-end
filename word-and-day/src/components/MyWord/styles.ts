import styled from 'styled-components'

export const Box = styled.div`
    width: 100%;
    /* min-width:1100px; */
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;

    & div {
        display: flex;
    }
    & img {
        width: 26%;
        position: relative;
    }
    & img:nth-of-type(1) {
        top: -42%;
        left: 16%;
    }
    & img:nth-of-type(2) {
        top: 42%;
        right: 16%;
    }
`

export const Post = styled.textarea.attrs({
    type: 'text',
    placeholder: '오늘의 한마디를 작성해주세요.',
})`
    width: 28.021vw;
    height: 27.658vh;
    padding: 4.12797vmin;
    background-color: #ffffff;
    outline: none;
    resize: none;
    font-size: 4vmin;
    font-family: 마루 부리OTF Beta, 나눔스퀘어;
`
