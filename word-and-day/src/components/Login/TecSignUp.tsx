import React from 'react';
import * as S from './styles'

function TecSignUp(){
    return(
        <S.LoginBox>
            <S.Subject>회원가입</S.Subject>
            <div>
                <S.InputLine>
                    <p>성함</p> <input type="text"/>
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
                    <div></div>
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
            <S.OtherMsg>학생 회원가입하기</S.OtherMsg>
            <S.Button>회원가입 하기</S.Button>
        </S.LoginBox>
    )
}

export default TecSignUp;