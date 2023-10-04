import { type Configuration } from 'webpack'
import path from 'path'
import { type BuildEnv, type BuildPaths } from './config/webpack/buildTypes'
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    src: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const mode = env?.mode || 'development'
  const PORT = env?.port || 3000
  const isDev = mode === 'development'

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  })

  return config
}
