import styled from 'styled-components';

export const Namecolor = styled.div`
    color: ${
        props => props.color || "skyblue"
    };
    font-size: ${
        props => props.size || "2rem"
    };
`;

