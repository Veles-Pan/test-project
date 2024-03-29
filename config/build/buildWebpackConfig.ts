import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildRules } from './buildRules';
import { BuildOptions } from './types/config';

export const buildWebpackConfig = (
  options: BuildOptions,
): webpack.Configuration => {
  const { mode, paths, isDevelopment } = options;
  return {
    mode,
    entry: paths.entryPoint,
    module: {
      rules: buildRules(options),
    },
    resolve: buildResolvers(options),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.outputPath,
      clean: true,
      publicPath: '/',
    },
    plugins: buildPlugins(options),
    devtool: isDevelopment ? 'inline-source-map' : undefined,
    devServer: isDevelopment ? buildDevServer(options) : undefined,
  };
};
