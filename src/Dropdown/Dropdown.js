import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import Animate from './../Animate';
import { StyledDropdown, slideDown, slideUp } from './styles';

/**
 * Simple Dropdown component
 *
 * @example ./../../docs/components/Dropdown.md
 */
class Dropdown extends Component {
    static propTypes = {
        /**
         * Dropdown component to be toggled eg. List
         */
        component: PropTypes.element,

        /**
         * Open dropdown dropdown callback function
         */
        openDropdown: PropTypes.func,

        /**
         * Close dropdown dropdown callback function
         */
        closeDropdown: PropTypes.func,

        /**
         * Toggle dropdown callback function
         */
        toggleDropdown: PropTypes.func,

        /**
         * Custom styles
         */
        style: PropTypes.object,
    };

    static defaultProps = {
        component: '',
    };

    static contextTypes = {
        theme: PropTypes.object,
    };

    componentDidMount() {
        document.body.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.handleClickOutside);
    }

    handleClickOutside = event => {
        const outsideDropdown =
            this.dropdown && !this.dropdown.contains(event.target);
        const outsideWrapper =
            this.wrapper && !this.wrapper.contains(event.target);

        if (outsideDropdown && outsideWrapper) {
            this.closeDropdown();
        }
    };

    toggleDropdown = () => {
        const { toggleDropdown } = this.props;

        this.setState(
            {
                isOpened: !this.state.isOpened,
            },
            () => {
                if (typeof toggleDropdown === 'function') {
                    toggleDropdown(this.state.isOpened);
                }
            }
        );
    };

    closeDropdown = () => {
        const { closeDropdown } = this.props;
        this.setState(
            {
                isOpened: false,
            },
            () => {
                if (typeof closeDropdown === 'function') {
                    closeDropdown();
                }
            }
        );
    };

    openDropdown = () => {
        const { openDropdown } = this.props;

        this.setState(
            {
                isOpened: true,
            },
            () => {
                if (typeof openDropdown() === 'function') {
                    openDropdown();
                }
            }
        );
    };

    renderDropDown = () => {
        const { isOpened = null } = this.state;
        const { component } = this.props;

        return (
            <Animate
                component={component}
                animation={{
                    name: isOpened ? slideDown : slideUp,
                    duration: '300ms',
                    iterationCount: 1,
                    timingFunction: 'linear',
                    fillMode: 'forwards',
                }}
            />
        );
    };

    render() {
        const { style = {}, className, children } = this.props;
        const { theme } = this.context;

        return (
            <StyledDropdown
                style={style}
                className={className}
                theme={theme}
                innerRef={comp => (this.wrapper = comp)}
            >
                <div
                    onClick={() => {
                        this.toggleDropdown();
                    }}
                >
                    {children}
                </div>
                <div
                    className={`dropdown`}
                    ref={comp => (this.dropdown = comp)}
                >
                    {this.renderDropDown()}
                </div>
            </StyledDropdown>
        );
    }
}

export default Dropdown;
