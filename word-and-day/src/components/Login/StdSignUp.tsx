import React from 'react';
import * as S from './styles'
import * as G from './../GlobalStyle'

function StdSignUp(){
    return(
        <G.Box>
            <G.Subject>회원가입</G.Subject>
            <div>
                <S.InputLine>
                    <p>이름</p> <input type="text"/>
                </S.InputLine>
                <S.InputLine>
                    <p>학교</p> <input type="text"/>
                </S.InputLine>
                <S.InputLine>
                    <div>
                        <p>학년</p>
                        <select name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <p>반</p>
                        <select name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div>
                        <p>번호</p>
                        <select name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">1</option>
                            <option value="5">1</option>
                            <option value="6">1</option>
                            <option value="7">1</option>
                            <option value="8">1</option>
                            <option value="9">1</option>
                            <option value="10">1</option>
                            <option value="11">1</option>
                            <option value="12">1</option>
                            <option value="13">1</option>
                            <option value="14">1</option>
                            <option value="15">1</option>
                            <option value="16">1</option>
                            <option value="17">1</option>
                            <option value="18">1</option>
                            <option value="19">1</option>
                            <option value="20">1</option>
                            <option value="21">1</option>
                        </select>
                    </div>
                </S.InputLine>
                <S.InputLine>
                    <p>아이디</p> <input type="text"/>
                </S.InputLine>
                <S.InputLine>
                    <p>비밀번호</p><input type="password"/>
                </S.InputLine>
                <S.InputLine>
                    <p>비밀번호 확인</p><input type="password"/>
                </S.InputLine>
            </div>
            <S.OtherMsg>담임선생님 회원가입하기</S.OtherMsg>
            <S.Button>회원가입 하기</S.Button>
        </G.Box>
    )
}

export default StdSignUp;