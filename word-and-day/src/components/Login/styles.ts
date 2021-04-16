import styled from 'styled-components'

export const LoginBox = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 마루 부리OTF Beta;
    color: #ffffff;
`
export const Subject = styled.p`
    width: 100vw;
    font-size: 5.2vmin;
    margin: 6.81115vmin;
`
export const InputLine = styled.div`
    width: 43.345vmin;
    display: flex;
    align-items: center;
    margin: 1.031996vmin 0;   

    & p{
        margin: 0 1.031996vmin 0 0;
        display: flex;
        justify-content: center;
        font-size: 3.09598vmin;
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
    } 
`
export const OtherMsg = styled.p`
    font-size: 1.44479vmin;
    width: 43.345vmin;
    display:flex;
    justify-content: flex-end;
    margin: 0.412797vmin 0 0 0;
`
export const LoginButton = styled.button`
    font-size: 3.09598vmin;
    font-family: 마루 부리OTF Beta;
    background-color: transparent;
    border:  none;
    outline: none;
    color: #ffffff;
    margin: 4.33437vmin 0 1.031996vmin 0;
`
export const CreateAccount = styled.p`
    font-size: 1.65119vmin;
`