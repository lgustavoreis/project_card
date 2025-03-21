const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
		main: "./js/main.js",
		product: "./js/product.js",
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		publicPath: "/", // This ensures assets are loaded correctly
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[hash].[ext]", // Image file name format
							outputPath: "images", // This places the images inside a 'images' folder in dist
						},
					},
				],
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new HtmlWebpackPlugin({
			template: "./index.html",
			chunks: ["main"],
			filename: "index.html",
		}),
		new HtmlWebpackPlugin({
			template: "./product.html",
			chunks: ["product"],
			filename: "product.html",
			inject: "head",
		}),

		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "images"),
					to: path.resolve(__dirname, "dist/images"),
				},
			],
		}),
	],

	devServer: {
		static: "./dist",
		port: 9000,
		open: true,
	},
};
