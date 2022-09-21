export type BuildMode = 'development' | 'production'

export interface BuildPaths {
  entryPoint: string
  outputPath: string
  htmlPath: string
  srcPath: string
}

export interface BuilsEnv {
  port: number
  mode: BuildMode
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDevelopment: boolean
  port: number
}
