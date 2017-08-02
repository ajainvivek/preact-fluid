import { Component } from 'preact';

import style from './styles';


class Container extends Component {
	render() {
		return (
			<div className={`${style.fluid_container}`}>
				{this.props.children}
			</div>
		);
	}
}

Container.propTypes = {};
Container.defaultProps = {};

export default Container;
