import styled, {css} from 'styled-components';
import animations from './../Animations';
import defaultTheme from '../theme';

const StyledNotifyWrapper = styled.div`
    display: grid;
    margin: 5px;
`;

const StyledNotify = styled.div`
    display: table;
    background: ${props => props.theme.notifyBgColor};
    border-radius: 4px;
    padding: 3px;
    height: 100%;
    min-height: 60px;
    min-width: 250px;
    max-width: 350px;
    cursor: pointer;
    animation: ${animations.slideInRight} 500ms ease-in;

    &.close {
        animation: ${animations.slideRight} 500ms ease-in forwards;
    }

    .notification-icon {
        animation: ${animations.shake} 1s linear;
        height: 100%;
        width: 60px;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .notification-body {
        position: relative;
        height: 100%;
        width: calc(100% - 68px);
        float: left;
        border-radius: 4px;
        padding: 4px;
        background-color: ${props => props.theme.lightColor};
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
    }

    .notification-close {
        position: absolute;
        top: 0px;
        right: 5px;
        font-size: 18px;
        cursor: pointer;
    }
    .notification-close:before {
        content: '\00d7';
        color: ${props => props.theme.grayColor};
    }

    .notification-title {
        font-size: 16px;
        padding: 5px;
        margin: 0;
        color: ${props => props.theme.grayColorDark};

        ${props => props.type === 'error' && css`
            color: ${props => props.theme.controlErrorColor};
        `}

        ${props => props.type === 'warning' && css`
            color: ${props => props.theme.controlWarningColor};
        `}

        ${props => props.type === 'success' && css`
            color: ${props => props.theme.controlSuccessColor};
        `}
    } 

    .notification-message {
        padding: 0 5px;
        margin: 0;
        font-size: 14px;
        color: ${props => props.theme.grayColorDark};
    }

	${props => props.style && css`
		${props.style}
	`}
`;

StyledNotifyWrapper.defaultProps = {
	theme: defaultTheme
};

StyledNotify.defaultProps = {
	theme: defaultTheme
};

export {
	StyledNotifyWrapper,
	StyledNotify
};