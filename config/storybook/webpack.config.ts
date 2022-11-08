import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildScssLoader } from '../build/loaders/buildScssLoaders';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    entryPoint: '',
    outputPath: '',
    htmlPath: '',
    srcPath: path.resolve(__dirname, '..', '..', 'src'),
  };
  config!.resolve!.modules!.push(paths.srcPath);
  config!.resolve!.extensions!.push('.ts', '.tsx');

  // @ts-ignore
  config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config!.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config!.module!.rules.push(buildScssLoader(true));

  config!.plugins!.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  return config;
};
