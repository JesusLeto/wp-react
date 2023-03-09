const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    
    entry: "./src/index.tsx",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"]
    }
}