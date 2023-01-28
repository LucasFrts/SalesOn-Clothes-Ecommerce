const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
    mode: 'development',

    entry:['./componentes/app.js']
,

    output: {
        path: path.resolve(__dirname, './static/JS'),
        filename: 'app-bundle.js',
  },

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },

    module: {
        rules: [
        {
            test: /\.(js|jsx)$/, 
            exclude: /node_modules/, 
            use: 'babel-loader', 
        },
    ],
  },
    devServer: {
        static:  path.join(__dirname, "./static/JS/dev"),
        

        hot: true,
        liveReload: true
    },  
    plugins: [
        new WriteFilePlugin()
],
};
