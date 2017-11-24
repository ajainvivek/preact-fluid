import styled, {css} from 'styled-components';
import defaultTheme from '../theme';

const StyledLink = styled.a`
	color: ${props => props.theme.linkColor};
	appearance: none;
	cursor: pointer;
	display: inline-block;
	outline: none;
	text-align: center;
	text-decoration: none;
	user-select: none;
	vertical-align: middle;
	white-space: nowrap;
	font-size: 14px;
	line-height: 14px;
	
	&:focus {
		text-decoration: none;
	}

	&:hover {
		text-decoration: none;
	}
	
	${props => props.style && css`
		${props.style}
	`}
`;

StyledLink.defaultProps = {
	theme: defaultTheme
};

export {
	StyledLink
};