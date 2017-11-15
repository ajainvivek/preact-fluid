import styled, {css} from 'styled-components';

export const StyledRadioGroup = styled.div`
	.radio-item {
		margin: 10px 0;

		${props => props.horizontal && css`
			margin: 0 10px;
			display: inline-block;
		`}
	}
	
	${props => props.style && css`
        ${props.style}
	`}
	
	${props => props.disabled && css`
		cursor: not-allowed;
	`}
`;

export const StyledLabel = styled.label`
	font-size: 16px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;