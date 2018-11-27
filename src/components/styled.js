import styled from 'styled-components';
import curve from '../static/curve.svg';

export const Wrapper = styled.div(({ theme }) => ({
	maxWidth: theme.width,
	margin: "0 auto",
    padding: "50px 10px",
    font: `${theme.fontSize} ${theme.fontFamily}`
}));

export const Main = styled.main.attrs({
    role: 'main'
})`
    padding: 20px;
    background: ${({ theme }) => theme.main};
	border-radius: ${({ theme }) => `0 0 ${theme.borderRadius} ${theme.borderRadius}`};
`;

export const Header = styled.header`
	padding: 75px 20px 100px 20px;
	background-color: ${({ theme }) => theme.primary};
	background-image:  linear-gradient(110deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
	position: relative;

	border-radius: ${({ theme }) => `${theme.borderRadius} ${theme.borderRadius} 0 0`};

	&:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-image: url(${curve});
		background-repeat: no-repeat;
		background-position: bottom left;
		background-size: contain;
		pointer-events: none;
		transform: scaleX(-1);
	}

	a, a:hover {
		text-decoration: none;
	}

	h1 {
		margin: 0;
		font-size: 0;
		display: inline-block;
		position: relative;
		color: ${({ theme }) => theme.headerText};

		&:before {
			content: attr(data-site-title);
			font-size: 50px;
			font-style: italic;
			position: relative;
			z-index: 10;
		}

		&:after {
			content: '';
			border-bottom: 15px solid #111;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 25%;
			opacity: .5;
		}

		&:hover:before {
			content: attr(data-site-title-hovered);
		}
	}
`;

export const InlineList = styled.ul`
    display: flex;
    margin: 0;
    justify-content: space-between;

	li {
		list-style: none;
	}
`;
