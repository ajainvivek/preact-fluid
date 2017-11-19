import styled, {css} from 'styled-components';

import colors from './../theme';

export const StyledList = styled.div`
	background: ${colors.lightColor};
	border: 1px solid ${colors.borderColor};
	border-radius: 3px;
	display: flex;
	flex-direction: column;
	box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.1);

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

export const StyledHeader = styled.div`
	padding: 20px;
	
	${props => props.style && css`
		${props.style}
	`}
`;

export const StyledSection = styled.ul`
	${props => props.style && css`
		${props.style}
	`}
`;

export const StyledItem = styled.li`
	${props => props.style && css`
		${props.style}
	`}
`;

export const StyledFooter = styled.div`
	${props => props.style && css`
		${props.style}
	`}
`;

export const StyledTitle = styled.h1`
	font-size: 20px;
	line-height: 32px;
	font-weight: 500;
    color: ${colors.darkColor};
    margin: 0;
    
    ${props => props.light && css`
		color: ${colors.lightColor};
	`}
    
    ${props => props.style && css`
		${props.style}
	`}
`;

export const StyledSubTitle = styled.h2`
	font-size: 14px;
	line-height: 18px;
	font-weight: 300;
    color: ${colors.grayColor};
    margin: 0;
    
    ${props => props.light && css`
		color: ${colors.lightColor};
	`}
    
    ${props => props.style && css`
		${props.style}
	`}
`;