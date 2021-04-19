import React from 'react';
import * as S from './styles'

function StdSchedule() {
    return(
        <S.ScheduleBox>
            <S.Subject>시간표</S.Subject>
            <S.Schedule>
                <S.Line>
                    <p>교시/요일</p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                </S.Line>
                <S.Line>
                    <p>월</p>
                    <p>창체</p>
                    <p>데베</p>
                    <p>운건</p>
                    <p>성직</p>
                    <p>컴네</p>
                    <p>수 1</p>
                    <p>한국</p>
                    <p>방과후</p>
                </S.Line>
                <S.Line>
                    <p>화</p>
                    <p>컴네</p>
                    <p>컴네</p>
                    <p>영 1</p>
                    <p>운체</p>
                    <p>수 1</p>
                    <p>데베</p>
                    <p>데베</p>
                    <p>전공</p>
                </S.Line>
                <S.Line>
                    <p>수</p>
                    <p>자바</p>
                    <p>자바</p>
                    <p>자바</p>
                    <p>한국</p>
                    <p>운체</p>
                    <p>운체</p>
                    <p>영 1</p>
                    <p>전공</p>
                </S.Line>
                <S.Line>
                    <p>목</p>
                    <p>운건</p>
                    <p>수 1</p>
                    <p>한국</p>
                    <p>성직</p>
                    <p>창체</p>
                    <p>창체</p>
                    <p>창체</p>
                    <p>자습</p>
                </S.Line>
                <S.Line>
                    <p>금</p>
                    <p>영 1</p>
                    <p>인빅</p>
                    <p>인빅</p>
                    <p>인빅</p>
                    <p>자바</p>
                    <p>자바</p>
                    <p>전공</p>
                    <p>전공</p>
                </S.Line>
            </S.Schedule>
        </S.ScheduleBox>
    )
}

export default StdSchedule;