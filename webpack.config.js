var path = require('path');

module.exports = {
    entry: path.resolve('./src/app.js'),
    output: {
        path: path.resolve('./dist/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['stage-2']
                }
            }
        ]
    }
};
