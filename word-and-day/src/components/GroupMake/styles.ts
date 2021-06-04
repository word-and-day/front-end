import styled from 'styled-components'

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