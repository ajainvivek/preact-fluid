/**
* Function that mutates original webpack config.
* Supports asynchronous changes when promise is returned.
*
* @param {object} config - original webpack config.
* @param {object} env - options passed to CLI.
* @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
**/

export default function (config, env, helpers) {
	config.module.loaders[2].use.push({
		loader: 'sass-resources-loader',
		options: {
			resources: ['./styles/mixins/*.scss']
		}
	});
}