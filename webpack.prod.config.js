const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  devtool: "source-map",
  stats: true,
  entry: { main: "./src/index.js" },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    open: true,
    hot: true,
    contentBase: path.resolve(__dirname, "./dist"),
    index: "index.html",
    port: 9090,
    writeToDisk: true,
    historyApiFallback: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          chunks: 'all',
          minSize: 0
        },
        vendors: {
          test: /[\\/]node_modules[\\/](styled-components|react-router)[\\/]/,
          name: 'vendors',
          chunks: 'all',
          minSize: 0
        }
      },
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      },
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,  //extracts css file from bundle.js into separate css file
          "css-loader"  //reads the contents of css file and returns js representation
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,  //extracts css file from bundle.js into separate css file
          "css-loader",  //reads the contents of css file and returns js representation
          "sass-loader"  //reads the contents of scss file and returns css representation
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource', //similar to file-loader
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: true
    }),
    // new BundleAnalyzerPlugin()
  ]
}
