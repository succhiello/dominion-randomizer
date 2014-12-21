var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    appPath = path.join(__dirname, 'app');

module.exports = {
    context: appPath,
    entry: './scripts/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.ls$/, loader: 'livescript' },
            { test: /\.hbs$/, loader: 'handlebars?helperDirs=' + path.join(appPath, 'scripts', 'helper') },
            { test: /\.css$/, loader: 'style!css' }
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
            '_': 'lodash'
        }),
        new HtmlWebpackPlugin({
            template: path.join(appPath, 'templates', 'index.html')
        })
    ]
};
