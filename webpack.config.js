const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
		product: "./js/product.js",
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
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
							name: "[name].[hash].[ext]", // You can modify the output format of your image files
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
			template: "./product.html",
			chunks: ["product"],
			filename: "product.html",
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "images"), // Include the entire images folder
					to: path.resolve(__dirname, "dist/images"), // Ensure they go to the dist/images folder
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
