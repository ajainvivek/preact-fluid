import { Component } from 'preact';

import './styles';


class Container extends Component {
	render() {
		return (
			<div className='fluid_container'>
				{this.props.children}
			</div>
		);
	}
}

Container.propTypes = {};
Container.defaultProps = {};

export default Container;
