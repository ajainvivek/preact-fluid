import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledFooter } from './styles';
import Grid from './../Layout/Grid';
import Cell from './../Layout/Cell';

/**
 * List Footer - https://dribbble.com/shots/3935136-MrWhite-UI-Kit-Dropdown-s/attachments/897751
 */
class ListFooter extends Component {
	static propTypes = {

		/**
		 * Custom styles
		 */
		style: PropTypes.object
	};

	static contextTypes = {
		theme: PropTypes.object
	};

	render() {
		const { style = '', className, left, right } = this.props;
		const { theme } = this.context;

		return (
			<StyledFooter
				style={style}
				className={className}
				theme={theme}
			>
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

export default ListFooter;