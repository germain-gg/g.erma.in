import React from 'react'
import styled from 'styled-components';

const DEFAULT_PADDING = "50px";

const HeaderTitle = styled.h1`
  margin: 0;
  font-family: Helvetica, sans-serif;
  transform: translateX(175px);
  transition: transform .2s ease-in-out;
  text-align: right;
`;

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  padding: ${DEFAULT_PADDING};

  &:after {
    content: '';
    position: absolute;
    top: ${DEFAULT_PADDING};
    bottom: ${DEFAULT_PADDING};
    right: -${DEFAULT_PADDING};
    width: 100px;
    background: #fff;
    transform: skew(-25deg);
    border-left: 2px solid #000;
  }

  &:hover ${HeaderTitle} {
    transform: translateX(0); 
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderTitle>{siteTitle}</HeaderTitle>
  </StyledHeader>
)

export default Header
