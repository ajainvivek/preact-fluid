import React, { Component } from 'preact';
import { StyledGrid } from './styles';

/**
 * Layout layout
 *
 * @example ./../../docs/components/Grid.md
 */
class Grid extends Component {
	render() {
		return (
			<StyledGrid {...this.props} />
		);
	}
}

export default Grid;