import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './buildTypes'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const fontLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          url: true,
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  }

  const imagesLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
  }

  return [svgLoader, typescriptLoader, scssLoader, fontLoader]
}
