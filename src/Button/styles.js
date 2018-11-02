import styled, { css } from 'styled-components';
import keyframes from '../keyframes';
import defaultTheme from '../theme';

const StyledButton = styled.button`
    position: relative;
    appearance: none;
    cursor: pointer;
    display: inline-block;
    outline: none;
    text-align: center;
    text-decoration: none;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    font-size: 14px;
    line-height: 14px;
    padding: 10px 20px;
    background: transparent;
    border: 1px solid
        ${props => props.theme.primaryColor || context.theme.color};
    border-radius: 2px;
    color: ${props => props.theme.linkColor};

    &.clicked:after {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        bottom: -1px;
        right: -1px;
        border-radius: inherit;
        border: 0 solid ${props => props.theme.primaryColor};
        opacity: 0.4;
        animation: ${keyframes.buttonEffect} 0.4s;
        display: block;
    }

    .badge {
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(50%, -50%);
        height: 18px;
        line-height: 1.5;
        min-width: 18px;
        text-align: center;
        white-space: nowrap;
        background-clip: padding-box;
        border-radius: 12px;
        box-shadow: 0 0 0 0.1rem #fff;
        color: #fff;
        display: inline-block;
        font-size: 12px;
        ${props =>
            props.badge &&
            css`
                background: ${props.badge.color
                    ? props.badge.color
                    : props.theme.primaryColor};
                padding: ${props.badge.value &&
                props.badge.value.toString().length > 1
                    ? '3px 8px'
                    : '3px'};
            `};
    }

    &.loading {
        color: transparent !important;
        pointer-events: none;
    }

    &.loading:after {
        animation: ${keyframes.loading} 500ms infinite linear;
        border: 2px solid ${props => props.theme.primaryColorDark};
        border-radius: 50%;
        border-right-color: transparent;
        border-top-color: transparent;
        content: '';
        display: block;
        height: 14px;
        left: 50%;
        margin-left: -9px;
        margin-top: -9px;
        position: absolute;
        top: 50%;
        width: 14px;
        z-index: 1;
    }

    &:disabled,
    &[disabled],
    &.disabled {
        opacity: 0.5;
    }

    .item-left {
        padding-right: 8px;
    }

    .item-right {
        padding-left: 8px;
    }

    ${props =>
        props.rounded &&
        css`
            border-radius: 20px;
        `} ${props =>
            props.primary &&
            css`
                background: ${props => props.theme.primaryColor};
                border: 1px solid ${props => props.theme.primaryColorDark};
                border-radius: 2px;
                color: ${props => props.theme.lightColor};

                &.loading:after {
                    border: 2px solid ${props => props.theme.lightColor};
                    border-right-color: ${props => props.theme.primaryColor};
                    border-top-color: ${props => props.theme.primaryColor};
                }
            `} ${props =>
            props.secondary &&
            css`
                background: ${props => props.theme.secondaryColor};
                border: 1px solid ${props => props.theme.secondaryColorDark};
                border-radius: 2px;
                color: ${props => props.theme.lightColor};

                &.loading:after {
                    border: 2px solid ${props => props.theme.lightColor};
                    border-right-color: ${props => props.theme.primaryColor};
                    border-top-color: ${props => props.theme.primaryColor};
                }
            `} ${props =>
            props.style &&
            css`
                ${props.style};
            `};
`;

StyledButton.defaultProps = {
    theme: defaultTheme,
};

export { StyledButton };
