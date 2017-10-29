import styled, {css} from 'styled-components';

import colors from './../theme';

export const StyledInput = styled.input`
	-webkit-appearance: none;
    color: ${colors.darkColor};
    display: block;
    font-size: 16px;
    height: 30px;
    line-height: 20px;
    max-width: 100%;
    position: relative;
    width: 100%;
    background: none rgb(255, 255, 255);
    border-width: 0.05rem;
    border-style: solid;
    border-color: rgb(202, 206, 215);
    border-image: initial;
    border-radius: 2px;
    outline: none;
    padding: 7px 8px;
    transition: all 0.2s ease;
    
    &:focus {
        box-shadow: rgba(87, 85, 217, 0.2) 0px 0px 0px 0.1rem;
        border-color: ${colors.primaryColor};
    }
	
	${props => props.style && css`
		${props.style}
	`}
`;