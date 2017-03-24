let path = require('path');
module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }
        ]
    }
};
