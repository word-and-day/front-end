import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styles'
import * as G from './../GlobalStyle'

function StdMyPlace(){
    return(
        <G.Box>
            <G.Subject>나의 공간</G.Subject>
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
                    <div><p>그룹코드 : </p> <p>QB2C5</p></div> <NavLink exact to="/pwchange">비밀번호 변경</NavLink>
                </S.Line>
            </div>
        </G.Box>
    )
}

export default StdMyPlace;