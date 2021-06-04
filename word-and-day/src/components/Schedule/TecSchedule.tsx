import React from 'react';
import * as S from './styles'
import * as G from './../GlobalStyle'

function TecSchedule() {
    return(
        <G.Box>
            <G.Subject>시간표</G.Subject>
            <S.Schedule>
                <S.Line>
                    <S.Day>.</S.Day>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <hr/>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                </S.Line>
                <S.Line>
                    <S.Day>월</S.Day>
                    <p>창체</p>
                    <p>데베</p>
                    <p>운건</p>
                    <p>성직</p>
                    <hr/>
                    <p>컴네</p>
                    <p>수 1</p>
                    <p>한국</p>
                    <p>방과후</p>
                </S.Line>
                <S.Line>
                    <S.Day>화</S.Day>
                    <p>컴네</p>
                    <p>컴네</p>
                    <p>영 1</p>
                    <p>운체</p>
                    <hr/>
                    <p>수 1</p>
                    <p>데베</p>
                    <p>데베</p>
                    <p>전공</p>
                </S.Line>
                <S.Line>
                    <S.Day>수</S.Day>
                    <p>자바</p>
                    <p>자바</p>
                    <p>자바</p>
                    <p>한국</p>
                    <hr/>
                    <p>운체</p>
                    <p>운체</p>
                    <p>영 1</p>
                    <p>전공</p>
                </S.Line>
                <S.Line>
                    <S.Day>목</S.Day>
                    <p>운건</p>
                    <p>수 1</p>
                    <p>한국</p>
                    <p>성직</p>
                    <hr/>
                    <p>창체</p>
                    <p>창체</p>
                    <p>창체</p>
                    <p>자습</p>
                </S.Line>
                <S.Line>
                    <S.Day>금</S.Day>
                    <p>영 1</p>
                    <p>인빅</p>
                    <p>인빅</p>
                    <p>인빅</p>
                    <hr/>
                    <p>자바</p>
                    <p>자바</p>
                    <p>전공</p>
                    <p>전공</p>
                </S.Line>
            </S.Schedule>
            <S.Finish><p>작성 마치기</p></S.Finish>
        </G.Box>
    )
}

export default TecSchedule;