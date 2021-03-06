const path = require('path');
const webpack = require('webpack');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled TerserPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */

const Dotenv = require('dotenv-webpack');
const Es3ifyPlugin = require('es3ify-webpack-plugin');
const GasPlugin = require('gas-webpack-plugin');

module.exports = {
	mode: 'production',
	performance: {
    maxEntrypointSize: 500000,
    maxAssetSize: 500000,
  },
	entry: {
		app: path.resolve(__dirname, 'src', 'app.js'),
		index: path.resolve(__dirname, 'src', 'index.ts'),
	},
	plugins: [
		new Dotenv({ path: '.env.production' }),
		new Es3ifyPlugin(),
		new GasPlugin(),
		new webpack.ProgressPlugin(),
	],
	module: {
		rules: [
			{
				test: /.(ts|tsx)$/,
				loader: 'ts-loader',
				exclude: [/node_modules/]
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
				exclude: [/node_modules/],
				type: 'javascript/auto'
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js']
	}
};
