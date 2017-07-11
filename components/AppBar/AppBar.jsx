import { Component } from 'preact';
import PropTypes from 'prop-types';

import Button from './../Button';

import style from './styles';

class AppBar extends Component {
	render() {
		return (
			<header className={`${style.fluid_app_bar}`}>
				<section className={`${style.fluid_app_bar__section}`}>
					<a href="#" className={`${style.fluid_app_bar__brand}`}>{this.props.title}</a>
					<Button type="primary" />
					<a href="https://github.com/ajainvivek/preact-fluid" class="btn btn-link">GitHub</a>
				</section>
				<section className={`${style.fluid_app_bar__section}`}>
					<div className="input-group input-inline">
						<input className="form-input" type="text" placeholder="search" />
						<button className="btn btn-primary input-group-btn">Search</button>
					</div>
				</section>
			</header>
		);
	}
}

AppBar.propTypes = {
	title: PropTypes.string.isRequired
};
AppBar.defaultProps = {};

export default AppBar;
