import React from 'react';
import * as S from './styles'

function PwChange () {
    return(
        <S.ChangeBox>
            <S.Subject>비밀번호 변경</S.Subject>
            <div>
                <S.InputLine>
                    <p>현재 비밀번호 : </p> <input type="password"/>
                </S.InputLine>
                <S.InputLine>
                    <p>변경할 비밀번호 : </p><input type="password"/>
                </S.InputLine>
                <S.InputLine>
                    <p>비밀번호 확인 : </p><input type="password"/>
                </S.InputLine>
            </div>
            <S.Button>비밀번호 변경 확인</S.Button>
        </S.ChangeBox>
    )
}

export default PwChange;