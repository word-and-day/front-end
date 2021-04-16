import React from 'react';
import * as S from './styles'

function Header() {
    return(
        <S.HeaderBox>
          <S.Title>오늘의 한마디</S.Title>
            <S.RightBox>
              <S.MySchedule>나의 시간표</S.MySchedule>
              <S.MyWord>나의 한마디</S.MyWord>
              <S.MyPlace>나의 공간</S.MyPlace>
              <S.Case>시작하기</S.Case>
            </S.RightBox>
        </S.HeaderBox>
    )
}

export default Header;