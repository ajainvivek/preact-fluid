import './style';
import { Component } from 'preact';

import AppBar from './components/AppBar';

export default class App extends Component {
	render() {
		return (
			<div>
				<AppBar title="Preact Fluid" />
			</div>
		);
	}
}
