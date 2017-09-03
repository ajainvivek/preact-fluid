import styled, {css} from 'styled-components';

import colors from './../theme';

export const StyledLink = styled.a`
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
	margin: 5px 10px;
	
	&:focus {
		text-decoration: none;
	}

	&:hover {
		text-decoration: none;
	}
	
	${props => (props.type === 'default') && css`
		color: ${colors.linkColor}
	`}
`;