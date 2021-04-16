import React from 'react';
import * as S from './styles'

function Login(){
    return(
        <S.LoginBox>
            <S.Subject>로그인</S.Subject>
            <div>
                <S.InputLine>
                    <p>아이디</p> <input type="text"/>
                </S.InputLine>
                <S.InputLine>
                    <p>비밀번호</p><input type="password"/>
                </S.InputLine>
            </div>
            <S.OtherMsg>담임선생님 로그인하기</S.OtherMsg>
            <S.LoginButton>로그인 하기</S.LoginButton>
            <S.CreateAccount>계정 만들기</S.CreateAccount>
        </S.LoginBox>
    )
}

export default Login;