import React from 'react'
import styled from 'styled-components';
import theme from '../style/theme';

const NavList = styled.ul`
    display: flex;
    margin: 0;
`

const NavLink = styled.a`
    color: ${theme.mainColor};
    text-decoration: none;
    margin-left: ${theme.spacing};
`

const NavItem = styled.li`
    list-style: none;
    margin: 0;
`

export default ({ links }) => (
    <NavList>
        { links.map(link => (
            <NavItem key={link.url}>
                <NavLink href={link.url}>
                    {link.name}
                </NavLink>
            </NavItem>
        ))}
    </NavList>
)