import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header';
import Main from '../components/main';

import './reset.css'
import './core.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
			<title>{data.site.siteMetadata.title}</title>
			<meta name="description" content={data.site.siteMetadata.description}/>
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="black"/>
			<meta property="og:type" content="website"/>
			<meta property="og:url" content={data.site.siteMetadata.url} />
			<meta property="og:title" content={data.site.siteMetadata.title}/>
			<meta property="og:image" content=""/>
			<meta property="og:description" content={data.site.siteMetadata.description}/>
			<meta property="og:site_name" content={data.site.siteMetadata.name} />
			<meta property="og:locale" content="en_GB"/>
			<meta name="twitter:card" content="summary"/>
			<meta name="twitter:creator" content="@germainsouquet"/>
			<meta name="twitter:url" content={data.site.siteMetadata.url}/>
			<meta name="twitter:title" content={data.site.siteMetadata.name} />
			<meta name="twitter:description" content={data.site.siteMetadata.description}/>

			<html lang="en" dir="ltr"/>
			<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    </Helmet>
		
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
