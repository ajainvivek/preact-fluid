'use strict';
/*global __dirname*/

var path = require('path');

module.exports = {
	title: '(P)react Fluid',
	sections: [{
		name: 'Components', content: './docs/Components.md', components: function() {
			return [
				'./src/Button/Button.js',
				'./src/Link/Link.js',
				'./src/Icon/Icon.js',
				'./src/AppBar/AppBar.js'
			];
		}
	}, {
		name: 'Animations', content: './docs/Animations.md', components: function() {
			return [
				'./src/Animated/Animated.js'
			];
		}
	}],
	theme: {
		baseBackground: '#fdfdfc',
		link: '#274e75',
		linkHover: '#90a7bf',
		border: '#e0d2de',
		font: ['Helvetica', 'sans-serif'],
	},
	template: './docs/template.html',
	showUsage: true,
	serverPort: 3013,
	webpackConfig: function(env) {
		var dir = path.join(__dirname, 'src');
		var babel = {
			test: /\.js?$/,
			include: dir,
			loader: 'babel-loader'
		}

		babel.query = {
			presets: ['es2015', 'stage-0', 'react']
		};

		return {
			module: {
				loaders: [babel],
			},
			resolve: {
				extensions: ['.jsx', '.js', '.json', '.less'],
				modules: [
					'node_modules'
				],
				alias: {
					'react': 'preact-compat',
					'react-dom': 'preact-compat',
					// Not necessary unless you consume a module using `createClass`
					'create-react-class': 'preact-compat/lib/create-react-class'
				}
			}
		};
	}
};