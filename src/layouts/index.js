import React from 'react'
import PropTypes from 'prop-types'

import Head from '../components/head';
import Header from '../components/header';
import Main from '../components/main';

import './reset.css'
import './core.css'

const Layout = ({ children, data }) => (
  <div>

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

  </div>
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
