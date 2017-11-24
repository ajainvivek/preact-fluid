module.exports = function (plop) {
	plop.setGenerator('component', {
		description: 'Generate a Fluid Component',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'What should it be called?',
			validate: function (value) {
				if ((/.+/).test(value)) { return true; }
				return 'name is required';
			}
		}],
		actions: [{
			type: 'add',
			path: 'src/{{properCase name}}/{{properCase name}}.js',
			templateFile: 'templates/component/component.txt'
		}, {
			type: 'add',
			path: 'src/{{properCase name}}/index.js',
			templateFile: 'templates/component/index.txt'
		}, {
			type: 'add',
			path: 'src/{{properCase name}}/styles.js',
			templateFile: 'templates/component/styles.txt'
		}, {
			type: 'add',
			path: 'docs/components/{{properCase name}}.md',
			templateFile: 'templates/component/document.txt'
		}]
	});
}