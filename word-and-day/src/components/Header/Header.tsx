import React from 'react';
import * as S from './styles'

function Header() {
    return(
        <S.HeaderBox>
          <S.Title>오늘의 한마디</S.Title>
            <S.RightBox>
              <p>나의 시간표</p>
              <p>나의 한마디</p>
              <p>나의 공간</p>
              <p>시작하기</p>
            </S.RightBox>
        </S.HeaderBox>
    )
}

export default Header;