import { resolve } from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

// eslint-disable-next-line no-underscore-dangle
const __DEV__ = process.env.NODE_ENV === 'development';
const ROOT_DIR = resolve(__dirname, 'src');

const config: webpack.Configuration & { devServer: WebpackDevServerConfiguration } = {
  mode: __DEV__ ? 'development' : 'production',
  devtool: __DEV__ ? 'inline-source-map' : 'hidden-source-map',
  entry: './src/entry.ts',
  output: {
    filename: 'entry.js',
    path: resolve(__dirname, 'dist'),
    library: 'main',
    libraryTarget: 'umd',
    devtoolNamespace: '', // for making links clickable in WebStorm Karma
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [ROOT_DIR, 'node_modules'],
    alias: {
      '@': ROOT_DIR,
    },
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          // ignore errors on test files to speed development - will be picked up by linting later
          reportFiles: ['!src/**/*.test.ts'],
        },
      },
    ],
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: null,
      exclude: [/node_modules/],
      test: /\.ts($|\?)/i,
    }),
  ],
  devServer: {
    contentBase: resolve(__dirname, 'public'),
    compress: true,
    port: 9000,
    open: true,
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
