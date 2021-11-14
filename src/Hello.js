import React from 'react';
import * as S from './style/HelloSt';

const Hello = ({size, color, name, isSpecial}) => {
    return (
        <S.Namecolor color={color} size={size}>
            { isSpecial && <b>*</b>}
        안녕하세요 {name}
        <br />
        </S.Namecolor>
    );
};

Hello.defaultProps = {
    name: '이름없음',
}

export default Hello;