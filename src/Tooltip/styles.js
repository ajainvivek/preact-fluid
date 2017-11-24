import styled, {css} from 'styled-components';
import defaultTheme from '../theme';

const StyledTooltip = styled.div`

	${props => props.style && css`
		${props.style}
	`}
`;

StyledTooltip.defaultProps = {
	theme: defaultTheme
};

export {
	StyledTooltip
};