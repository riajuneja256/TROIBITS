const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const PAGE_TITLE = 'React Planner';
const VENDORS_LIBRARIES = ['react', 'react-dom', 'three'];

module.exports = (env, self) => {
  let isProduction = self.hasOwnProperty('mode') ? ( self.mode === 'production' ) : true;
  let port = self.hasOwnProperty('port') ? self.port : 8080;

  if (isProduction) console.info('Webpack: Production mode'); else console.info('Webpack: Development mode');

  let config = {
    context: path.resolve(__dirname),
    entry: {
      app: './src/index.js',
      vendor: VENDORS_LIBRARIES
    },
    output: {
      path: path.join(__dirname, 'build'),
      filename: '[chunkhash].[name].js',
      publicPath: '/'
    },
    performance: {
      hints: isProduction ? 'warning' : false
    },
    devtool: isProduction ? 'source-map' : 'eval',
    devServer: {
      port: port,
      contentBase: path.join(__dirname, './build'),
      historyApiFallback: true
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            'compact': false,
            'plugins': [
              'transform-object-rest-spread'
            ],
            'presets': [
              'env',
              'react'
            ]
          }

        }]
      }, {
        test: /\.(jpe?g|png|gif|mtl|obj|fbx)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            hash: 'sha512',
            digest: 'hex',
            name: '[path][name].[ext]'
          }
        }]
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'file-loader' }
        ]
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: PAGE_TITLE,
        template: './public/index.html',
        filename: 'index.html',
        inject: 'body',
        production: isProduction
      })
    ],
    optimization: {
      minimize: isProduction,
      splitChunks: {
        cacheGroups: {
          default: false,
          commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
              chunks: 'all',
              minSize: 10000,
              reuseExistingChunk: true
          }
        }
      }
    }
  };

  if (isProduction) {
    config.plugins.push(new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }));
  }

  config.plugins.push(new webpack.DefinePlugin({
    isProduction: JSON.stringify(isProduction)
  }));

  // if (!isProduction) {
  //   config.plugins.push(new OpenBrowserPlugin({url: `http://localhost:${port}`}));
  // }

  return config;
};
