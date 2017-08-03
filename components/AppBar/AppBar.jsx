import { Component } from 'preact';
import PropTypes from 'prop-types';

import Components from './../index';

import style from './styles';

const Link = Components.Link;


class AppBar extends Component {
	render() {
		const {
			title = '',
			left = [],
			right =[]
		} = this.props;

		return (
			<header className={`${style.fluid_app_bar}`}>
				<section className={`${style.fluid_app_bar__section}`}>
					<Link style={this.props.titleStyle}>{title}</Link>
					{left.map((partial) => {
						const CustomComponent = Components[partial.component];
						return (
							<CustomComponent> {partial.title} </CustomComponent>
						);
					})}
				</section>
				<section className={`${style.fluid_app_bar__section}`}>
					{right.map((partial) => {
						const CustomComponent = Components[partial.component];
						return (
							<CustomComponent> {partial.title} </CustomComponent>
						);
					})}
				</section>
			</header>
		);
	}
}

AppBar.propTypes = {
	title: PropTypes.string.isRequired,
	left: PropTypes.array,
	titleStyle: PropTypes.object
};
AppBar.defaultProps = {};

export default AppBar;
