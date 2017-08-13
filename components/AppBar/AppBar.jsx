import { Component } from 'preact';
import PropTypes from 'prop-types';

import Link from './../Link';
import Button from './../Button';

import './styles';

const Components = {
    Link,
    Button
};

class AppBar extends Component {
	render() {
		const {
			title = '',
			left = [],
			right =[]
		} = this.props;

		return (
			<header className='fluid_app_bar'>
				<section className='fluid_app_bar__section'>
					<Link style={this.props.titleStyle}>{title}</Link>
					{left.map((partial) => {
						const CustomComponent = Components[partial.component];
						return (
							<CustomComponent> {partial.title} </CustomComponent>
						);
					})}
				</section>
				<section className='fluid_app_bar__section'>
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
