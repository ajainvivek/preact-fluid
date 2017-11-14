import styled, {css} from 'styled-components';

export const StyledRadioGroup = styled.div`
	.radio-item {
		margin: 10px 0;
	}
	
	${props => props.style && css`
        ${props.style}
    `}
`;