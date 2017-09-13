import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import {isEqual} from 'lodash';
import anime from 'animejs';
/**
 * Anime component
 */
class Anime extends Component {

	static propTypes = {
		children: PropTypes.string.isRequired
	};

	static defaultProps = {
	};

	constructor(props) {
		super(props);

		// Current Anime DOM Targets
		this.targets = [];

		let { children } = props;
		if (!Array.isArray(children)) children = [children];
		this.children = {
			cur: children,
			prev: [],
			next: []
		};
	}

	componentDidMount() {
		this.createAnime();
	}

	componentWillReceiveProps(nextProps) {
		let { children } = nextProps;
		let prevChildren = this.props.children;

		if (!Array.isArray(children)) children = [children];
		if (!Array.isArray(prevChildren)) prevChildren = [prevChildren];

		// Determine diff children
		let difChildren = children.filter(
			v => !prevChildren.reduce((prev, cur) => prev || isEqual(v, cur), false)
		);

		// Determine if children are added/removed
		let childrenWereRemoved = difChildren.reduce(
			(prev, cur) => prev || prevChildren.indexOf(cur) > -1,
			false
		);

		// Split children to current, old, and new
		this.children = {
			cur: children.filter(c => difChildren.indexOf(c) < 0),
			prev: childrenWereRemoved ? difChildren : this.children.prev,
			next: !childrenWereRemoved ? difChildren : this.children.next
		};

		this.createAnime();
	}

	createAnime = () => {
		let animeProps = { targets: this.targets, ...this.props };
		delete animeProps.children;

		if (this.anime === undefined)
			this.anime = anime(animeProps);
		else {
			this.anime = anime(animeProps);
		}
	};

	addTarget = newTarget => {
		this.targets = [...this.targets, newTarget];
	};

	render() {
		let { style } = this.props;
		let { cur } = this.children;
		return (
			<g style={{ ...style }}>
				{cur.map((child, i) =>
					React.cloneElement(child, { key: i, innerRef: this.addTarget }))}
			</g>
		);
	}
}

export default Anime;
