import { Component } from 'preact';
import PropTypes from 'prop-types';

import style from './styles';


class Cols extends Component {
	render() {
		const {
			xl,
			lg,
			md,
			sm,
			xs
		} = this.props;
		const dfClass = style[`fluid_column__col-${xl || lg || md || sm || xs || ''}`]; // Default
		const xlClass = xl ? style[`fluid_column__col-md-${xl}`] : ''; // Extra Large
		const lgClass = lg ? style[`fluid_column__col-lg-${lg}`] : ''; // Large
		const mdClass = md ? style[`fluid_column__col-md-${md}`] : ''; // Medium
		const smClass = sm ? style[`fluid_column__col-sm-${sm}`] : ''; // Small
		const xsClass = sm ? style[`fluid_column__col-xs-${xs}`] : ''; // Extra Small
		return (
			<div className={`${dfClass} ${xlClass} ${lgClass} ${mdClass} ${smClass} ${xsClass}`}>
				{this.props.children}
			</div>
		);
	}
}

Cols.propTypes = {
	xl: PropTypes.number,
	lg: PropTypes.number,
	md: PropTypes.number,
	sm: PropTypes.number,
	xs: PropTypes.number,
};
Cols.defaultProps = {
};

export default Cols;