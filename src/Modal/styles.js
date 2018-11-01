import styled, { css } from 'styled-components';
import defaultTheme from '../theme';

const StyledModal = styled.div`
    ${props =>
        props.style &&
        css`
            ${props.style};
        `};
`;

StyledModal.defaultProps = {
    theme: defaultTheme,
};

export { StyledModal };
