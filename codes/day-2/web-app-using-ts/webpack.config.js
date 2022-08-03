const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const configObject = {
    entry: {
        main: path.resolve(__dirname, './src/index.ts'),
        utility: path.resolve(__dirname, './src/utility.ts')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.ts', '.js', '.tsx', '.jsx']
                }
            },
            {
                test: /\.html$/i,
                use: {
                    loader: 'html-loader',
                }
            },
            {
                test: /\.css$/i,
                use: ['css-loader', 'style-loader']
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 9000
    }
}
module.exports = configObject