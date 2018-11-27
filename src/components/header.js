import React, { Component } from 'react';

import { Header as StyledHeader } from './styled';

const Header = ({ siteTitle }) => (
	<StyledHeader>
		<a href="/">
			<h1
				data-site-title={siteTitle}
				data-site-title-hovered="\ʒɛʁ.mɛ̃\ Souquet"
			>
				{siteTitle}
			</h1>
		</a>
	</StyledHeader>
);

export default Header;
