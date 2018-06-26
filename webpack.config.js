let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");

let conf = {
	entry: './src/js/App.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'App.js',
		publicPath: 'dist/'
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: "css-loader"
				})
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		inline: true,
  		port: 3000,
  		hot: true
	},
	plugins: [
		new ExtractTextPlugin("style.css"),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/index.html',
			filename: 'index.html'
		})
	]
};

module.exports = (env, options) => {
	let production = options.mode === 'production';

	conf.devtool = production
					? false
					: 'eval-sourcemap';

	return conf;
}