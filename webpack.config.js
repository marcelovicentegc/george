const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const clientPort = process.env.CLIENT_PORT || 3000;

module.exports = {
  context: __dirname,
  mode: "development",
  entry: {
    client: "./src/client/index.tsx",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
  },
  devtool: "source-map",
  node: { fs: "empty" },
  resolve: {
    extensions: [".ts", ".tsx", ".mjs", ".js", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "client", "index.html"),
      filename: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env.SERVER_PORT": JSON.stringify(process.env.SERVER_PORT),
      "process.env.GEORGE_ALIAS": JSON.stringify(process.env.GEORGE_ALIAS),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.json",
        },
        exclude: [/node_modules/],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
      // antd needs it
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        loader: "file-loader",
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          mangle: true,
          output: {
            comments: false,
          },
          compress: {
            warnings: false, // Suppress uglification warnings
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            screw_ie8: true,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
          },
        },
        exclude: [/\.min\.js$/gi],
      }),
    ],
  },
  devServer: {
    publicPath: "/",
    contentBase: "./dist",
    watchContentBase: true,
    compress: true,
    port: clientPort,
    hot: true,
    inline: true,
    open: process.env.NODE_ENV !== "production" ? true : false,
    openPage: "",
    historyApiFallback: true,
    allowedHosts: ["127.0.0.0", "localhost"],
    stats: {
      colors: true,
    },
  },
};
