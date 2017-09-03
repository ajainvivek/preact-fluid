import { Component } from 'preact';

import styles from './styles';


class Container extends Component {
	render() {
		return (
			<div className={styles.fluid_container}>
				{this.props.children}
			</div>
		);
	}
}

Container.propTypes = {};
Container.defaultProps = {};

export default Container;
