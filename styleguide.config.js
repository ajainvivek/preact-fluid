'use strict';
/*global __dirname*/

var path = require('path');

module.exports = {
	title: '(P)react Fluid',
	sections: [
	{
		name: 'Introduction', content: './docs/Introduction.md'
	},
	{
		name: 'Components', content: './docs/Components.md', components: function() {
			return [
				'./src/Button/Button.js',
				'./src/Link/Link.js',
				'./src/Icon/Icon.js',
				'./src/Image/Image.js',
				'./src/AppBar/AppBar.js',
				'./src/Card/Card.js',
				'./src/List/List.js',
				'./src/Notify/Notify.js',
				'./src/Tooltip/Tooltip.js',
				'./src/Dropdown/Dropdown.js'
			];
		}
	}, {
		name: 'Form', content: './docs/Form.md', components: function() {
			return [
				'./src/Form/TextField/TextField.js',
				'./src/Form/Radio/Radio.js',
				'./src/Form/RadioGroup/RadioGroup.js',
				'./src/Form/Checkbox/Checkbox.js'
			];
		}
	}, {
		name: 'Layout', content: './docs/Layout.md', components: function() {
			return [
				'./src/Layout/Grid.js'
			];
		}
	}, {
		name: 'Animations', content: './docs/Animations.md', components: function() {
			return [
				'./src/Animate/Animate.js'
			];
		}
	}, {
		name: 'Theming', content: './docs/Theming.md'
	}],
	theme: {
		baseBackground: '#fdfdfc',
		link: '#454d5d',
		linkHover: '#90a7bf',
		border: '#e0d2de',
		font: ['Helvetica', 'sans-serif'],
	},
	styles: {
		Playground: {
			preview: {
				padding: '20px',
				borderWidth: [[0, 0, 1, 0]],
				borderRadius: 0,
				background: '#f7f7f7'
			},
		},
		Markdown: {
			pre: {
				border: 0,
				background: 'none',
			},
			code: {
				fontSize: 14,
			},
		},
		StyleGuide: {
			sidebar: {
				backgroundColor: '#fff',
				boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px',
				width: '250px'
			}
		},
		ComponentsList: {
			item: {
				color: '#454d5d',
				padding: '5px 2px'
			}
		},
		Link: {
			link: {
				'&, &:link, &:visited': {
					color: '#000'
				}
			}
		},
		Logo: {
			logo: {
				color: '#653ab0',
				fontSize: '22px',
				textAlign: 'center'
			}
		},
		SectionHeading: {
			heading: {
				fontSize: '24px',
				fontWeight: 'normal',
				paddingBottom: '15px',
				marginBottom: '10px',
				width: '100%',
				'&:hover, &:active': {
					textDecoration: 'none'
				},
			},
			isPrimary: {
				fontSize: '30px',
				borderBottom: '1px solid #eee'
			}
		}
	},
	template: './docs/template.html',
	showUsage: true,
	serverPort: 3013,
	require: [
		path.resolve(__dirname, 'styleguide/setup.js')
	],
	assetsDir: './assets',
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