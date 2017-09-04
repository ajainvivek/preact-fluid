'use strict';
/*global __dirname*/

var path = require('path');

module.exports = {
	title: '(P)react Fluid',
	sections: [{
		name: 'Button', content: './docs/components/Button.md', components: function() {
			return [
				'./src/Button/Button.js'
			];
		}
	}],
	template: './docs/template.html',
	showUsage: true,
	serverPort: 3013,
	webpackConfig: function(env) {
		var dir = path.join(__dirname, 'src');
		var babel = {
			test: /\.js?$/,
			include: dir,
			loader: 'babel-loader'
		};
		if (env !== 'production') {
			babel.query = {
				presets: ['es2015', 'stage-0', 'react']
			};
		}

		return {
			module: {
				loaders: [babel]
			},
			resolve: {
				extensions: ['.jsx', '.js', '.json', '.less'],
				modules: [
					path.resolve(__dirname, 'node_modules'),
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