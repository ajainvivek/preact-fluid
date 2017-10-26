import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledFooter } from './styles';
import Grid from './../Layout/Grid';
import Cell from './../Layout/Cell';

/**
 * Cards header displays title information
 */
class CardFooter extends Component {
	static propTypes = {
		/**
		 * Custom styles
		 */
		style: PropTypes.object
	};
	render() {
		const { style, left, right } = this.props;
		return (
			<StyledFooter style={{ style }}>
				<Grid columns={2}>
					<Cell width={1} style={{textAlign: 'left'}}>
						{left}
					</Cell>
					<Cell width={1} style={{textAlign: 'right'}}>
						{right}
					</Cell>
				</Grid>
			</StyledFooter>
		);
	}
}

export default CardFooter;