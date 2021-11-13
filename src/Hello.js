import React from 'react';

const Hello = ({ color, name}) => {
    return (
        <div style={
            {
                color
            }
        }>
         안녕하세요 {name}
         <br />
        </div>
    );
};

Hello.defaultProps = {
    name: '이름없음',
    color: 'skyblue'
}

export default Hello;