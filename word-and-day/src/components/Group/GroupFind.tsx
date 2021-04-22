import React from 'react';
import * as S from './styles';
import Postit from "../../asset/Postit.png";

function GroupFind() {
    return(
        <S.Box>
            <S.Subject>그룹찾기</S.Subject>
            <S.Line>
                <p>그룹 코드 입력</p>
                <input type="text"/>
            </S.Line>
            <S.GroupChoice>
                <img src={Postit} alt=""/>
                <div>
                    <p>대고학생</p>
                </div>
            </S.GroupChoice>
        </S.Box>
    )
}

export default GroupFind;