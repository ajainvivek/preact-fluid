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
`;

export const StyledSubTitle = styled.h2`
	font-size: 16px;
	line-height: 28px;
	font-weight: 300;
    color: ${colors.grayColor};
    margin: 0;
`;

export const StyledImageWrapper = styled.div`
	padding: 0;
	margin: 0;
	
	&:last-child {
      padding-top: 16px;
    }
    
    img {
        display: block;
        height: auto;
        width: 100%;
        margin: 0 auto;
        object-fit: cover;
    }
`;