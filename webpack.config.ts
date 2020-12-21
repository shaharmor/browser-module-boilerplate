import { resolve } from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const devMode = process.env.NODE_ENV === 'development';

const config: webpack.Configuration & { devServer: WebpackDevServerConfiguration } = {
  mode: devMode ? 'development' : 'production',
  devtool: devMode ? 'inline-source-map' : 'hidden-source-map',
  entry: './src/entry.ts',
  output: {
    filename: 'entry.js',
    path: resolve(__dirname, 'dist'),
    library: 'main',
    libraryTarget: 'umd',
    devtoolNamespace: '',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.build.json',
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.build.json',
          transpileOnly: devMode,
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: undefined,
      exclude: [/node_modules/],
      test: /\.ts($|\?)/i,
    }),
    new HtmlWebpackPlugin(),
  ],
  devServer: {
    compress: true,
    open: true,
    injectClient: false, // https://github.com/webpack/webpack-dev-server/issues/2484#issuecomment-655211893
  },
};

export default config;
