const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    filename: "bundle.[fullhash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: './public/favicon.ico',
      inject: 'head'
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: "./src/assets/favicons/", 
          to: path.resolve(__dirname, "dist")
        },
      ],
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test:  /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.pdf|png|svg|jpg|jpeg|gif$/,
        use: ["file-loader"],
      },
      {
        test: /\.(webm|mp4|mov)$/,
        use: ["file-loader"]
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};