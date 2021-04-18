import React from 'react';
import * as S from './styles'

function TecMyPlace(){
    return(
        <S.Place>
            <S.Subject>나의 공간</S.Subject>
            <div>
                <S.Line>
                    <div><p>학교 : </p> <p>대덕소프트웨어마이스터고등학교</p></div>
                </S.Line>
                <S.Line>
                    <div><p>성함 :</p> <p>대쩌구</p></div>
                </S.Line>
                <S.Line>
                    <div><p>학년 :</p> <p>2</p></div>
                </S.Line>
                <S.Line>
                    <div><p>반 : </p> <p>1</p></div> <button>시간표 변경</button>
                </S.Line>
                <S.Line>
                    <div><p>그룹코드 : </p> <p>QB2C5</p></div> <button>비밀번호 변경</button>
                </S.Line>
            </div>
        </S.Place>
    )
}

export default TecMyPlace;