var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: "cheap-eval-source-map",

	entry: './src/app.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}]
	},

	plugins: [new HtmlWebpackPlugin({
		title: 'Dashboard Technical Test'
	})]

	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
