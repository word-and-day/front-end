import styled from 'styled-components'

export const Place = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
`
export const Subject = styled.p`
    width: 100vw;
    font-size: 5.2vmin;
    margin: 6.81115vmin;
    cursor: default;
`
export const Line = styled.div`
    width: 55.522vmin;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2.06398vmin 0;
    & div{
        display: flex;
    }
    & p{
        margin: 0 1.031996vmin 0 0;
        display: flex;
        font-size: 3.09598vmin;
        cursor: default;
    }
    & input{
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #ffffff;
        outline: none;
        flex: 1;
        height: 2vmin;
        color: #ffffff;
        font-size: 2.3vmin;
        letter-spacing: 0.12vmin;
        min-width: 10vmin;
    }
    & button{
        font-size: 4.12797vmin;
        font-family: 마루 부리OTF Beta;
        background-color: transparent;
        border:  none;
        outline: none;
        color: #ffffff;
        cursor: pointer;
    }
`