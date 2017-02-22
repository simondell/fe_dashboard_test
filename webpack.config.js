const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: "cheap-eval-source-map",

	entry: './src/app.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		},
		{
			test: /\.css/,
			loaders: ['style-loader', 'css-loader'],
			include: __dirname + '/src'
		}]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Dashboard Technical Test'
		})
	],

	resolve: {
		extensions: ['.js', '.jsx', '.json']
	}
};
