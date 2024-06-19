const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

// Load environment variables from .env file
// Dotenv.config();

module.exports = (env) => {
    return {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [
            // new webpack.DefinePlugin({
            // 'process.env': JSON.stringify(process.env)
            // })
            new Dotenv()
            
        ],
        mode: 'development',
        }
};