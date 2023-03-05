import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolvers = ({ paths }: BuildOptions): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
  preferAbsolute: true,
  modules: [paths.srcPath, 'node_modules'],
  alias: {},
});
