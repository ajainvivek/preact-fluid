import { Component } from 'preact';
import PropTypes from 'prop-types';

import './styles';


class Columns extends Component {
	render() {
		const {
			noGutter,
			oneLine
		} = this.props;
		return (
			<div
				className={`
					fluid_columns ${noGutter ? 'fluid_columns__no_gutter' : ''}
					${oneLine ? 'fluid_columns__online' : ''}
				`}
			>
				{this.props.children}
			</div>
		);
	}
}

Columns.propTypes = {
	noGutter: PropTypes.bool,
	oneLine: PropTypes.bool
};
Columns.defaultProps = {
	noGutter: false,
	oneLine: false
};

export default Columns;