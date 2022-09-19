import webpack from 'webpack'

export const buildRules = (): webpack.RuleSetRule[] => [
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }
]
