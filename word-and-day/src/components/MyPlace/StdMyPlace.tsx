import React from 'react';
import * as S from './styles'

function StdMyPlace(){
    return(
        <S.Place>
            <S.Subject>나의 공간</S.Subject>
            <div>
                <S.Line>
                    <div><p>학교 : </p> <p>대덕소프트웨어마이스터고등학교</p></div>
                </S.Line>
                <S.Line>
                    <div><p>이름 :</p> <p>김예진</p></div>
                </S.Line>
                <S.Line>
                    <div><p>아이디 :</p> <p>yeyejinjin</p></div>
                </S.Line>
                <S.Line>
                    <div><p>개인코드 : </p> <p>201105</p></div>
                </S.Line>
                <S.Line>
                    <div><p>그룹코드 : </p> <p>QB2C5</p></div> <button>비밀번호 변경</button>
                </S.Line>
            </div>
        </S.Place>
    )
}

export default StdMyPlace;