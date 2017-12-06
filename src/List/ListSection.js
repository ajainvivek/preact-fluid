import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledSection } from './styles';

/**
 * List Section
 */
class ListSection extends Component {
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
            <StyledSection style={style} className={className} theme={theme}>
                {children}
            </StyledSection>
        );
    }
}

export default ListSection;
