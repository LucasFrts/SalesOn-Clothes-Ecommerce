const path = require('path');

module.exports = {
    mode: 'development',

    entry:['./componentes/app.js']
,

    output: {
        path: path.resolve(__dirname, './static/JS'),
        filename: 'app-bundle.js',
  },devtool: 'inline-source-map',

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    watchOptions: {
        poll: 1000, // Check for changes every second
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
        static:  path.join(__dirname, "./"),
        
        compress: true,
        hot: true,
        liveReload: true
    }, 
};
