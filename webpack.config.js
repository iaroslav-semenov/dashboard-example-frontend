let path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname,
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: [ path.resolve(__dirname, 'node_module') ],
				include: [ path.resolve(__dirname, 'src') ],
                options: {
				    presets: [ 'es2015', 'react' ],
                    plugins: ['transform-object-rest-spread']
                }
			},
            {
                test: /\.scss$/,
                use:  [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                    options: {
                        includePaths: [path.resolve(__dirname, 'src/Styles')]
                    }
                }]
            },
            { test: /\.css$/, loader: "style-loader!css-loader?importLoaders=1" },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
		]
	},
    devServer: {
        port: 3000,
        historyApiFallback: true
    }
};
