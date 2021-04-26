import React from 'react';
import * as S from './styles';
import Postit from "../../asset/Postit.png";

function Group(){
    return(
        <S.GroupBox>
            <S.GroupName>대고학생</S.GroupName>
            <S.PostCollect>
                <S.Post>
                    <img src={Postit} alt=""/>
                    <div>
                        <p>대고학생</p>
                    </div>
                </S.Post>
                <S.Post>
                    <img src={Postit} alt=""/>
                    <div>
                        <p>대고학생</p>
                    </div>
                </S.Post>
                <S.Post>
                    <img src={Postit} alt=""/>
                    <div>
                        <p>대고학생</p>
                    </div>
                </S.Post>
                <S.Post>
                    <img src={Postit} alt=""/>
                    <div>
                        <p>대고학생</p>
                    </div>
                </S.Post>
            </S.PostCollect>
        </S.GroupBox>
    )
}

export default Group;