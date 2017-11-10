import styled, {css} from 'styled-components';

import colors from './../theme';
import animations from './../Animations';

export const StyledNotifyWrapper = styled.div`
    display: block;
    margin: 5px;
`;

export const StyledNotify = styled.div`
    display: table;
    background: ${colors.notifyBgColor};
    border-radius: 4px;
    padding: 3px;
    height: 100%;
    min-height: 60px;
    min-width: 250px;
    max-width: 350px;
    cursor: pointer;
    animation: ${animations.slideInRight} 500ms ease-in;

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
        background-color: ${colors.lightColor};
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
        color: ${colors.grayColor};
    }

    .notification-title {
        font-size: 16px;
        padding: 5px;
        margin: 0;
        color: ${colors.grayColorDark};

        ${props => props.type === 'error' && css`
            color: ${colors.controlErrorColor};
        `}

        ${props => props.type === 'warning' && css`
            color: ${colors.controlWarningColor};
        `}

        ${props => props.type === 'success' && css`
            color: ${colors.controlSuccessColor};
        `}
    } 

    .notification-message {
        padding: 0 5px;
        margin: 0;
        font-size: 14px;
        color: ${colors.grayColorDark};
    }

	${props => props.style && css`
		${props.style}
	`}
`;