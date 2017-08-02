import { Component } from 'preact';
import PropTypes from 'prop-types';

import style from './styles';


class Columns extends Component {
	render() {
		const {
			noGutter,
			oneLine
		} = this.props;
		return (
			<div
				className={`
					${style.fluid_columns} ${noGutter ? style.fluid_columns__no_gutter : ''}
					${oneLine ? style.fluid_columns__online : ''}
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