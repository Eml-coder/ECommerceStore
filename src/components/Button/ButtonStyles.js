import styled from 'styled-components';
// There are multiple buttons on the App, so we are creating a base button component i.e styles that all buttons will inherit. and then creating the individual button components that will inherit the base button styles but still have their own unique styles.

// base button component
export const BaseButton = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;
// creating a google sign in button component but also inheriting the base button styles above.
export const GoogleSignInButton = styled(BaseButton)`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

// creating an inverted button component but also inheriting the base button styles above.
export const InvertedButton = styled(BaseButton)`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;
