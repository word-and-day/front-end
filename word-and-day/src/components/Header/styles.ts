import styled from 'styled-components'

export const HeaderBox = styled.div`
    width: 100vw;
    height: 15vmin;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    & a{
        font-size: 3.09598vmin;
        color: #fff;
        margin: 0 0 0 10.31992vmin;
        z-index: -500;
        min-width: 20vmin;
        cursor: pointer;
        text-decoration: none;
    }
`

export const RightBox = styled.div`
    display: flex;
    align-items: center;
    margin: 0 12.3839vmin 0 0;
    z-index: 500;
    & p {
    font-size: 2.27038vmin;
    color: #fff;
    width: 12vmin;
    margin: 0;
    margin: 0 2vmin;
    cursor: pointer;
    }

    & a {
    font-size: 2.27038vmin;
    color: #fff;
    width: 12vmin;
    margin: 0;
    margin: 0 2vmin;
    cursor: pointer;
    text-decoration: none;
    }
`

