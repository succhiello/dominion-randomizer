var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    appPath = path.join(__dirname, 'app');

module.exports = {
    context: appPath,
    entry: {
        style: './scripts/style',
        main: './scripts/index'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-[hash].js'
    },
    module: {
        loaders: [
            { test: /\.ls$/, loader: 'livescript' },
            { test: /\.hbs$/, loader: 'handlebars?helperDirs=' + path.join(appPath, 'scripts', 'helper') },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
    },
    plugins: [
        new webpack.IgnorePlugin(/#$/),
        new webpack.IgnorePlugin(/~$/),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        ),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'Bacon': 'baconjs',
            '_': 'lodash',
            '__': 'lodash-fp'
        }),
        new HtmlWebpackPlugin({
            template: path.join(appPath, 'templates', 'index.html')
        })
    ]
};
