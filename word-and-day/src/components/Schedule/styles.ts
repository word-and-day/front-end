import styled from 'styled-components'

export const ScheduleBox = styled.div`
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
export const Schedule = styled.div`
    display: flex;
    width: 100.104vmin;
`
export const Line = styled(Schedule)`
    font-size: 2.68318vmin;
    flex-direction: column;
    height: 60vmin;
    display: flex;
    justify-content: space-between;

    & p {
        margin: 0;
    }

    & hr {
        width: 100%;
        color: #ffffff;
        margin: 0;
    }
`
export const Day = styled.p`
    font-size: 4.12797vmin;
`

export const Finish = styled.p`
    font-size: 3vmin;
    position: relative;
    & p {
        position: fixed;
        bottom: 2vmin;
        right: 15vmin;
    }
`