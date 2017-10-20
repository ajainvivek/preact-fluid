import styled, {css} from 'styled-components';

import colors from './../theme';

export const StyledCard = styled.div`
	background: ${colors.lightColor};
	border: 1px solid ${colors.borderColor};
	border-radius: 2px;
	display: flex;
	flex-direction: column;
	
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

export const StyledHeader = styled.h1`
	padding: 20px;
    padding-bottom: 0;
    margin: 0;
    font-weight: bold;

    &:last-child {
      padding-bottom: 20px;
    }
`;