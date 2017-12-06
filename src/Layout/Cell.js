import React, { Component } from 'preact';
import { StyledCell } from './styles';

/**
 * Cards are content containers to display information
 *
 * @example ./../../docs/components/Card.md
 */
class Cell extends Component {
    render() {
        return <StyledCell {...this.props} />;
    }
}

export default Cell;
