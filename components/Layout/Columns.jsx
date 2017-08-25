import { Component } from 'preact';
import PropTypes from 'prop-types';

import styles from './styles';


class Columns extends Component {
	render() {
		const {
			noGutter,
			oneLine
		} = this.props;
		return (
			<div
				className={`
					${styles.fluid_columns} ${noGutter ? styles.fluid_columns__no_gutter : ''}
					${oneLine ? styles.fluid_columns__online : ''}
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