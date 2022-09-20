import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export const buildRules = ({
  isDevelopment
}: BuildOptions): webpack.RuleSetRule[] => {
  const scssRules = {
    test: /\.s[ac]ss$/i,
    use: [
      isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDevelopment
              ? '[local]_[hash:base64:8]'
              : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  }

  const typescriptRules = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  return [typescriptRules, scssRules]
}
