import React from 'react';
import Helmet from 'react-helmet'

export const Head = ({ title, description, url, name }) => (
	<Helmet>
		<title>{title}</title>
		<meta name="description" content={description}/>
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black"/>
		<meta property="og:type" content="website"/>
		<meta property="og:url" content={url} />
		<meta property="og:title" content={title}/>
		<meta property="og:image" content=""/>
		<meta property="og:description" content={description}/>
		<meta property="og:site_name" content={name} />
		<meta property="og:locale" content="en_GB"/>
		<meta name="twitter:card" content="summary"/>
		<meta name="twitter:creator" content="@germainsouquet"/>
		<meta name="twitter:url" content={url}/>
		<meta name="twitter:title" content={name} />
		<meta name="twitter:description" content={description}/>

		<html lang="en" dir="ltr"/>
		<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    </Helmet>
);

export default Head;
