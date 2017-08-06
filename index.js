import './style';
import { Component } from 'preact';

import { AppBar, Container, Columns, Col } from './components';

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
				<Container>
					<Columns>
						<Col md={3}>
							A
						</Col>
						<Col md={6}>
							B
						</Col>
						<Col md={3}>
							C
						</Col>
					</Columns>
				</Container>
			</div>
		);
	}
}

// Export
export { AppBar, Button, Link, Container, Columns, Col } from './components';
