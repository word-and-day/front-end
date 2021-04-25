import styled from 'styled-components'

export const GroupBox = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
`
export const Subject = styled.p`
    width: 100%;
    font-size: 5.2vmin;
    margin: 6.81115vmin;
    cursor: default;
`
export const InputLine = styled.div`
    width: 55.522vmin;
    display: flex;
    align-items: center;
    margin: 1.031996vmin 0;   
    & div {
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
`
export const Button = styled.button`
    font-size: 3.09598vmin;
    font-family: 마루 부리OTF Beta;
    background-color: transparent;
    border:  none;
    outline: none;
    color: #ffffff;
    margin: 4.33437vmin 0 1.031996vmin 0;
    cursor: pointer;
`
export const OverlapCheck = styled(Button)`
    margin: 0;
    font-size: 2.06398vmin;
`