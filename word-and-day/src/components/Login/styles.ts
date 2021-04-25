import styled from 'styled-components'

export const LoginBox = styled.div`
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
    width: 43.345vmin;
    display: flex;
    justify-content: space-between;
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
    & select {
        width: 6.193vmin;
        height: 3.819vmin;
        background: transparent;
        color: #ffffff;
        border: 1px solid #ffffff;
        font-size: 2vmin;
        cursor: pointer;
    }
    & option {
        background-color: #000000;
        cursor: pointer;
    }
`
export const OtherMsg = styled.p`
    font-size: 1.44479vmin;
    width: 43.345vmin;
    display:flex;
    justify-content: flex-end;
    margin: 0.412797vmin 0 0 0;
    cursor: pointer;
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
export const CreateAccount = styled.p`
    font-size: 1.65119vmin;
    cursor: pointer;
`