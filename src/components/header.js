import React from 'react'
import styled from 'styled-components';
import theme from '../style/theme';
import Nav from './nav';


const HeaderTitle = styled.h1`
  margin: 0;
  font-family: ${theme.fontFamily};
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  max-width: ${theme.siteWidth};
  margin: 0 auto;
  position: relative;
  padding: ${theme.headerPadding} 0;
  border-bottom: 5px solid ${theme.mainColor};

  @media (max-width: calc(${theme.siteWidth} + ${theme.spacing} + ${theme.spacing})) {
    margin: 0 ${theme.spacing};
    text-align: center;
    flex-direction: column;
  }

  @media (min-width: calc(${theme.siteWidth} + ${theme.spacing} + ${theme.spacing})) {
    &:after {
      content: '';
      position: absolute;
      top: ${theme.headerPadding};
      bottom: ${theme.headerPadding};
      left: 180px;
      width: 150px;
      background: #fff;
      transform: skew(-25deg);
      border-left: 2px solid #000;
    }
  }
`;

const Header = ({ siteTitle, links }) => (
  <StyledHeader>
    <HeaderTitle>{siteTitle}</HeaderTitle>
    {/* <Nav links={links} /> */}
  </StyledHeader>
)

export default Header
