import webpack from 'webpack'

export const buildRules = (): webpack.RuleSetRule[] => {
  const scssRules = {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader']
  }

  const typescriptRules = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  return [typescriptRules, scssRules]
}
