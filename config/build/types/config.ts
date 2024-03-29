export type BuildMode = 'development' | 'production'

export interface BuildPaths {
  entryPoint: string
  outputPath: string
  htmlPath: string
  srcPath: string
  locales: string
  buildLocales: string
}

export interface BuilsEnv {
  port: number
  mode: BuildMode
  apiUrl: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDevelopment: boolean
  port: number
  apiUrl: string
  project: 'storybook' | 'app' | 'jest'
}
