const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    // devServer watchFiles required, webpack dev server doesn't track html by defautl
    devServer: {
	watchFiles: ['frontend/index.html']
    },
    entry: '/frontend/app.js',
    output: {
	// Creates the drectory every time bundle is executed
	path: path.join(__dirname,'backend/public'),
	filename: 'js/bundle.js'
    },
    // Deployment ready
    mode: 'production',

    // CSS Configuration
    module: {
	rules: [{
	    // Look for .css files
	    test: /\.css/,
	    use: [
		// Create CSS files when devMode is production
		devMode ? 'style-loader': MiniCssExtractPlugin.loader, 'css-loader'
	    ]
	}]
    },

    plugins: [
	new HtmlWebpackPlugin({
	    template: './frontend/index.html',
	    // HTML Webpack configuration
	    minify: {
		collapseWhitespace: true,
		removeComments: true,
		removeRedundantAttributes: true,
		removeScriptTypeAttributes: true,
		remoceStyleLinkAttributes: true,
		useShortDocType: true
	    }
	}),
	new MiniCssExtractPlugin({
	    filename: 'css/bundle.css'
	})
    ],
    // Source maps allow for better error tracking 
    devtool: 'source-map'
}



