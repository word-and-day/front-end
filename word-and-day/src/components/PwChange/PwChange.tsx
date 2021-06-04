import React from 'react';
import * as S from './styles'
import * as G from './../GlobalStyle'

function PwChange () {
    return(
        <G.Box>
            <G.Subject>비밀번호 변경</G.Subject>
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
        </G.Box>
    )
}

export default PwChange;