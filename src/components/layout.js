import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Head from './head';
import Header from './header';
import { Wrapper, Main } from './styled';

import * as theme from "../style/theme";
import resetCSS from '../static/reset.css';

const ResetCSS = createGlobalStyle`${resetCSS}`;
const BackgroundCSS = createGlobalStyle`
body {
    background: ${theme.background};
}
`;

const Layout = ({ children, data }) => {
    const { siteUrl, name, title, description, headerName } = data.site.siteMetadata;
    return (
        <>
            <ResetCSS />
            <BackgroundCSS />
            <ThemeProvider theme={theme}>
                <Wrapper>
                    <Head
                        url={siteUrl}
                        name={name}
                        title={title}
                        description={description}
                    />
                    <Header siteTitle={headerName} />
                    <Main>
                        {children}
                    </Main>
                </Wrapper>
            </ThemeProvider>
        </>
    );
}

export default Layout;
