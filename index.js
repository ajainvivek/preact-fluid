import './style';
import { Component } from 'preact';

import { AppBar } from './components';

const leftNav = [
	{
		component: 'Link',
		title: 'Docs',
		url: '#',
		target: 'blank'
	},
	{
		component: 'Link',
		title: 'Github',
		url: '#',
		target: 'blank'
	}
];

const rightNav = [
	{
		component: 'Button',
		title: 'Github',
		url: '#',
		target: 'blank'
	}
];

export default class App extends Component {
	render() {
		return (
			<div>
				<AppBar title="Preact Fluid" left={leftNav} right={rightNav} titleStyle={{ fontSize: '18px' }} />
			</div>
		);
	}
}
