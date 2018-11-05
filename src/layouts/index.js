import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, injectGlobal } from 'styled-components';

import Head from '../components/head';
import Header from '../components/header';
import { Wrapper, Main } from '../components/styled';

import * as theme from "./theme";
import resetCSS from '../static/reset.css';

injectGlobal`${resetCSS}`;
injectGlobal`
	body {
		background: ${theme.background};
	}
`;

const Layout = ({ children, data }) => (
	<ThemeProvider theme={theme}>
		<Wrapper>
			<Head
				url={data.site.siteMetadata.url}
				name={data.site.siteMetadata.name}
				title={data.site.siteMetadata.title}
				description={data.site.siteMetadata.description}
			/>
			<Header
				siteTitle={data.site.siteMetadata.headerName}
			/>
			<Main>
				{children()}
			</Main>
		</Wrapper>
	</ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
				name,
				title,
				headerName,
				description
      }
    }
  }
`
