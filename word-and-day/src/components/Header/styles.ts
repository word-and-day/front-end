import styled from 'styled-components'

export const HeaderBox = styled.div`
    width: 100vw;
    height: 15vmin;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
`


export const Title = styled.p`
    font-family: 마루 부리OTF Beta;
    font-size: 3.09598vmin;
    color: #fff;
    margin: 0 0 0 10.31992vmin;
    z-index: -500;
`

export const RightBox = styled.div`
    display: flex;
    align-items: center;
    margin: 0 12.3839vmin 0 0;
    z-index: 500;
`

export const MySchedule = styled.p`
    font-size: 2.27038vmin;
    color: #fff;
    width: 16vmin;
    margin: 0;
`

export const MyWord = styled(MySchedule)``

export const MyPlace = styled(MySchedule)``

export const  Case = styled(MySchedule)``