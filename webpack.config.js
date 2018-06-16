let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");

let conf = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
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
		contentBase: path.join(__dirname, "dist")
	},
	plugins: [
		new ExtractTextPlugin("styles.css"),
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