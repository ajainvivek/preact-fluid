import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledItem } from './styles';

/**
 * List Item
 */
class ListItem extends Component {
    static propTypes = {
        /**
         * Custom styles
         */
        style: PropTypes.object,
    };

    static contextTypes = {
        theme: PropTypes.object,
    };

    get left() {
        const { left } = this.props;

        if (left && left.nodeName) {
            // if node exists
            return <div className="list-item-left">{left}</div>;
        }

        return '';
    }

    get right() {
        const { right } = this.props;

        if (right && right.nodeName) {
            // if node exists
            return <div className="list-item-right">{right}</div>;
        }

        return '';
    }

    handleClick = () => {
        const { onClick } = this.props;

        if (typeof onClick === 'function') {
            onClick(this.item);
        }
    };

    render() {
        const { style = '', className, children, active } = this.props;
        const { theme } = this.context;

        return (
            <StyledItem
                style={style}
                className={className}
                active={active}
                theme={theme}
                onClick={this.handleClick}
                innerRef={item => (this.item = item)}
            >
                {this.left}
                {children}
                {this.right}
            </StyledItem>
        );
    }
}

export default ListItem;
