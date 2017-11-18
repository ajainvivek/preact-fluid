import styled, {css} from 'styled-components';

import colors from './../theme';

export const StyledCard = styled.div`
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
	padding: 16px;
    padding-bottom: 0;
    margin: 0;

    &:last-child {
      padding-bottom: 16px;
    }
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

export const StyledImageWrapper = styled.div`
	position: relative;
	padding: 0;
	margin: 0;
	overflow: hidden;
	
	&:not(:first-child):last-child {
      padding-top: 16px;
    }
    
    .image-overlay {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 16px;
        text-align: right;
        background: rgba(0, 0, 0, 0.4);
        width: 100%;
    }
    
    ${props => props.style && css`
		${props.style}
	`}
`;

export const StyledBody = styled.div`
	font-size: 16px;
	line-height: 24px;
	padding: 16px;
    padding-bottom: 0;
    margin: 0;
    color: ${colors.darkColor};

    &:last-child {
      padding-bottom: 16px;
    }
    
    ${props => props.style && css`
		${props.style}
	`}
`;

export const StyledFooter = styled.div`
	padding: 16px;
    padding-bottom: 0;
    margin: 0;

    &:last-child {
      padding-bottom: 16px;
    }
    
    ${props => props.style && css`
		${props.style}
	`}
`;