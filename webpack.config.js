const path = require('path');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './index.js',
    },
    output: {
        filename: 'realtime.bundle.js',
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: '/assets',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: { presets: ['latest', 'react'] }
            }],
        },],
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public')
    },
};
