var webpack = require('webpack');
 
module.exports = {
 
    entry: [
        './src/index.js',
        'webpack-dev-server/client?https://0.0.0.0:8081',
        'webpack/hot/only-dev-server'
    ],
 
    output: {
        path: '/',
        filename: 'bundle.js'
    },
 
    devServer: {
        hot: true,
        filename: 'bundle.js',
        publicPath: '/',
        historyApiFallback: true,
        contentBase: './public',
        proxy: {
            "*": "http://localhost:8080"
        },
        stats: {
          // Config for minimal console.log mess.
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
        } 
    },

    
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
 
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/,
            }
        ]
    }


};
