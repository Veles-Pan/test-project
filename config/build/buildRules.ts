import webpack from 'webpack';
import { buildScssLoader } from './loaders/buildScssLoaders';
import { BuildOptions } from './types/config';

export const buildRules = ({
  isDevelopment,
}: BuildOptions): webpack.RuleSetRule[] => {
  const scssRules = buildScssLoader(isDevelopment);

  const typescriptRules = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgRules = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const imgRules = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const babelRules = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  return [babelRules, typescriptRules, scssRules, svgRules, imgRules];
};
