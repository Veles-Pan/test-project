import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildScssLoader = (isDevelopment: boolean) => ({
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
            : '[hash:base64:8]',
        },
      },
    },
    'sass-loader',
  ],
});
