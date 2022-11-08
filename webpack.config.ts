import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths, BuilsEnv } from './config/build/types/config';

export default (env: BuilsEnv) => {
  const paths: BuildPaths = {
    entryPoint: path.resolve(__dirname, 'src', 'index.tsx'),
    outputPath: path.resolve(__dirname, 'dist'),
    htmlPath: path.resolve(__dirname, 'public', 'index.html'),
    srcPath: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const isDevelopment = mode === 'development';
  const apiUrl = env.apiUrl || 'http://localhost:8000';
  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDevelopment,
    port: PORT,
    apiUrl,
    project: 'app',
  });
  return config;
};
