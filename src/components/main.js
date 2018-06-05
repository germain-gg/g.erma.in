import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';

export default styled.section.attrs({
    role: 'main'
})`
    margin: 0 auto;
    position: relative;
    padding: ${theme.spacing} 0;
    max-width: ${theme.siteWidth};

    @media (max-width: calc(${theme.siteWidth} + ${theme.spacing} + ${theme.spacing})) {
        margin: 0 ${theme.spacing};
    }
`