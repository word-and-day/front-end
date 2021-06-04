import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styles'

function Header() {
    return(
        <S.HeaderBox>
          <NavLink exact to="/">오늘의 한마디</NavLink>
            <S.RightBox>
              <NavLink exact to="/schedule">나의 시간표</NavLink>
              <NavLink exact to="/myword">나의 한마디</NavLink>
              <NavLink exact to="/myplace">나의 공간</NavLink>
              <NavLink exact to="/login">시작하기</NavLink>
            </S.RightBox>
        </S.HeaderBox>
    )
}

export default Header;