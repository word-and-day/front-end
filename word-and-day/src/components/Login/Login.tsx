import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styles'
import * as G from './../GlobalStyle'

function Login(){
    return(
        <G.Box>
            <G.Subject>로그인</G.Subject>
            <div>
                <S.InputLine>
                    <p>아이디</p><input type="text"/>
                </S.InputLine>
                <S.InputLine>
                    <p>비밀번호</p><input type="password"/>
                </S.InputLine>
            </div>
            {/* <NavLink exact to="/tecsignup">담임선생님 로그인하기</NavLink> */}
            <S.Button>로그인 하기</S.Button>
            <NavLink exact to="/signup">계정 만들기</NavLink>
        </G.Box>
    )
}

export default Login;