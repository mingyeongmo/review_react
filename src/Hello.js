import React from 'react';
import * as S from './style/HelloSt';

const Hello = ({size, color, name}) => {
    return (
        <S.Name_color color={color} size={size}>
        안녕하세요 {name}
        <br />
        </S.Name_color>
    );
};

Hello.defaultProps = {
    name: '이름없음',
}

export default Hello;