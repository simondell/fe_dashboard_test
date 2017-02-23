const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  module: {
	rules: [
	]
  },
  plugins: [
	new ExtractTextPlugin("styles.css"),
  ]
}


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
		},{
			test: /\.css$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: { modules: true }
				}
			]
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
