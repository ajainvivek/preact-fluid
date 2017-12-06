import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledList } from './styles';

/**
 * List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.
 *
 * @example ./../../docs/components/List.md
 */
class List extends Component {
    static propTypes = {
        /**
         * Custom styles
         */
        style: PropTypes.object,
    };

    static contextTypes = {
        theme: PropTypes.object,
    };

    render() {
        const { style = '', className, children } = this.props;
        const { theme } = this.context;

        return (
            <StyledList style={style} className={className} theme={theme}>
                {children}
            </StyledList>
        );
    }
}

export default List;
