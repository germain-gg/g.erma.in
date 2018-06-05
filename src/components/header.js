import React from 'react'
import styled from 'styled-components';
import theme from '../style/theme';


const HeaderTitle = styled.h1`
  margin: 0;
  font-family: ${theme.fontFamily};
`;

const StyledHeader = styled.header`
  box-sizing: border-box;
  max-width: ${theme.siteWidth};
  margin: 0 auto;
  position: relative;
  padding: ${theme.headerPadding} 0;
  border-bottom: 5px solid ${theme.mainColor};

  @media (max-width: calc(${theme.siteWidth} + 40px)) {
    margin: 0 20px;
    text-align: center;
  }

  @media (min-width: calc(${theme.siteWidth} + 40px)) {
    &:after {
      content: '';
      position: absolute;
      top: ${theme.headerPadding};
      bottom: ${theme.headerPadding};
      left: 200px;
      width: 150px;
      background: #fff;
      transform: skew(-25deg);
      border-left: 2px solid #000;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderTitle>{siteTitle}</HeaderTitle>
  </StyledHeader>
)

export default Header
