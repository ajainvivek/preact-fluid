import styled, { css } from 'styled-components';

import colors from './../../theme';

import { keyframes } from 'styled-components';

const checkedDrop = keyframes`
    0% {
        top: -30px;
        transform: scale(0);
    }
    100% {
        top: 0;
        transform: scale(1);
    }
`;

const uncheckedDrop = keyframes`
    0% {
        bottom: 0;
        transform: scale(1);
    }
    100% {
        bottom: -30px;
        transform: scale(0);
    }
`;

export const StyledRadio = styled.span`
    position: relative;
    display: inline-flex;
    cursor: pointer;

    .radio {
        display: none;
        
        &:checked + label:after {
            background: transparent;
            transition: all .5s;
            transform: scale(1);
        }

        &.default + label {
            background: ${colors.primaryColor};
            animation-delay: 0s;
        }

        &.default + label:before {
            transform: scale(0);
        }

        &.default:checked + label:before {
            transform: scale(1);
            transition: all .4s;
        }

        &.circle + label {
            background: ${colors.primaryColor};
            border-color: ${colors.primaryColor}!important;
            animation-delay: .2s;
            border: 3px solid;
            width: 30px;
            height: 30px;
            ${props => props.bgColor && css`
                background: ${props.bgColor};
                border-color: ${props.bgColor}!important;
            `}
        }

        &.circle:checked + label {
            background: ${colors.lightColor};
            box-shadow: inset rgba(0, 0, 0, 0.117647) 0 0 1px 0, inset rgba(0, 0, 0, 0.239216) 0 1px 2px 0;
            transition: all .2s;
            ${props => props.highlightColor && css`
                background: ${props.highlightColor};
            `}
        }

        &.circle:checked + label:before {
            width: 15px;
            height: 15px;
            background: ${colors.primaryColor};
            transition: all .4s;
            ${props => props.bgColor && css`
                background: ${props.bgColor};
            `}
        }

        &.circle:not(:checked) + label:before {
            width: 16px;
            height: 16px;
            background: ${colors.primaryColor};
            box-shadow: none;
            ${props => props.bgColor && css`
                background: ${props.bgColor};
            `}
        }

        &.drop + label {
            background: ${colors.primaryColor};
            animation-delay: .4s;
            ${props => props.bgColor && css`
                background: ${props.bgColor};
            `}
        }

        &.drop+ label:before {
            transform: scale(0);
            animation-name: ${uncheckedDrop};
            animation-duration: .2s;
            animation-timing-function: ease-in-out;
        }

        &.drop:checked + label:before {
            animation-name: ${checkedDrop};
            animation-duration: .4s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }
    }


    label {
        display: inline-block;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        cursor: pointer;

        &:before, &:after {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            padding: 0;
            outline: 0;
            overflow: hidden;
            box-sizing: border-box;
        }

        &:before {
            content: "";
            position: absolute;
            width: 15px;
            height: 15px;
            background: ${colors.lightColor};
            border-radius: 50%;
            box-shadow: rgba(0, 0, 0, 0.117647) 0 0 2px 0, rgba(0, 0, 0, 0.239216) 0 2px 2px 0;
            transition: all .2s;
            ${props => props.highlightColor && css`
                background: ${props.highlightColor};
            `}
        }

        &:hover:before {
            box-shadow: rgba(0, 0, 0, 0.0784314) 0 0 3px 0, rgba(0, 0, 0, 0.239216) 0 3px 3px 0;
        }

        &:after {
            content: "";
            position: absolute;
            width: 30px;
            height: 30px;
            background: rgba(255, 255, 255, .5);
            border-radius: 50%;
            transform: scale(0);
        }
    }

    ${props => props.style && css`
        ${props.style}
    `}
`;

export const StyledLabel = styled.label`
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;