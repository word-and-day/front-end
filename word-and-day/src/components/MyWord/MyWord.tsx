import React from 'react';
import * as S from './styles'
import * as G from './../GlobalStyle'
import {Tape} from '../../asset/index'

function MyWord(){
    return(
        <S.Box>
            <G.Subject>나의 한마디</G.Subject>
            <div>
                <img src={Tape} alt="" />
                <S.Post />
                <img src={Tape} alt="" />
            </div>
        </S.Box>
    )
}

export default MyWord;