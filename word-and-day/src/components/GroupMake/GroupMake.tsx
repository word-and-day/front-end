import React from 'react';
import * as S from './styles'
import * as G from './../GlobalStyle'

function GroupMake(){
    return(
        <S.GroupBox>
            <G.Subject>그룹만들기</G.Subject>
            <div>
                <S.InputLine>
                    <p>성함 :</p> <p>대쩌구</p>
                </S.InputLine>
                <S.InputLine>
                    <p>학교 : </p> <p>대덕소프트웨어마이스터고등학교</p>
                </S.InputLine>
                <S.InputLine>
                    <p>그룹 이름 : </p> <input type="text"/>
                </S.InputLine>
                <S.InputLine>
                    <p>그룹코드 : </p> <input type="text"/><S.OverlapCheck>중복확인</S.OverlapCheck>
                </S.InputLine>
            </div>
            <S.Button>그룹만들기</S.Button>
        </S.GroupBox>
    )
}

export default GroupMake;