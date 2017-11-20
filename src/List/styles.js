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
	padding: 15px 20px;
	border-bottom: 1px solid ${colors.borderColor};
	
	${props => props.style && css`
		${props.style}
	`}
`;

export const StyledSection = styled.ul`
	padding: 0;
	margin: 0;

	&:not(:last-child) {
		border-bottom: 1px solid ${colors.borderColor};
	}

	${props => props.style && css`
		${props.style}
	`}
`;

export const StyledItem = styled.li`
	padding: 0 20px;
	color: ${colors.grayColorDark};
	height: 42px;
	line-height: 42px;

	&:hover {
		cursor: pointer;
		background: ${colors.listActiveColor};
	}

	.list-item-left {
		display: inline-flex;
		height: 100%;
		padding-right: 15px;
		float: left;
		justify-content: center;
		align-items: center;

		i {
			color: ${colors.grayColorDark};
		}
	}

	.list-item-right {
		display: inline-flex;
		height: 100%;
		padding-left: 15px;
		float: right;
		justify-content: center;
		align-items: center;

		i {
			color: ${colors.grayColorDark};
		}
	}

	${props => props.active && css`
		background: ${colors.listActiveColor};
	`}

	${props => props.style && css`
		${props.style}
	`}
`;

export const StyledFooter = styled.div`
	padding: 15px 20px;

	&:not(:last-child) {
		border-top: 1px solid ${colors.borderColor};
	}

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