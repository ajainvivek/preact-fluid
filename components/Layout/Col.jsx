import { Component } from 'preact';
import PropTypes from 'prop-types';

import style from './styles';


class Cols extends Component {
	render() {
		const {
			df,
			xl,
			lg,
			md,
			sm,
			xs
		} = this.props;
		const dfClass = df ? `col-${df}` : ''; // Default
		const xlClass = xl ? `col-xl-${xl}` : ''; // Extra Large
		const lgClass = lg ? `col-lg-${lg}` : ''; // Large
		const mdClass = md ? `col-md-${md}` : ''; // Medium
		const smClass = sm ? `col-sm-${sm}` : ''; // Small
		const xsClass = sm ? `col-xs-${xs}` : ''; // Extra Small
		return (
			<div className={`${style[dfClass]} ${style[xlClass]} ${style[lgClass]} ${style[mdClass]} ${style[smClass]} ${style[xsClass]}`}>
				{this.props.children}
			</div>
		);
	}
}

Cols.propTypes = {
	df: PropTypes.number,
	xl: PropTypes.number,
	lg: PropTypes.number,
	md: PropTypes.number,
	sm: PropTypes.number,
	xs: PropTypes.number,
};
Cols.defaultProps = {
};

export default Cols;