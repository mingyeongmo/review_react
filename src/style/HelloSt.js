import styled from 'styled-components';

export const Name_color = styled.div`
    color: ${
        props => props.color || "skyblue"
    };
    font-size: ${
        props => props.size || "2rem"
    };
`;

